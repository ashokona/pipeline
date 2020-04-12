
import { Component, OnInit, ElementRef, EventEmitter, AfterViewInit, Input, Output } from '@angular/core';
import * as d3 from 'd3';

@Component({
    selector: 'cops-d3-region-map',
    templateUrl: './d3-region-map.component.html',
    styleUrls: ['./d3-region-map.component.scss']
})
export class D3RegionMapComponent {
    @Input() regions;
    private parentNativeElement: any;
    private margin = { top: 0, right: 5, bottom: 5, left: 0 };
    private width: number;
    private height: number;
    private rotate: number = 0;//60;
    private maxlat: number = 83;
    private svg: any;
    //   private legendSvg: any;
    private projection: any;
    private path: any;
    private tooltipGroup: any;
    private worldMapJson: string = "../../../../assets/worldmap.json";
    private selectionMap: any;
    globalRegionData: any;
    private toplavelsvgheight: number = 20;
    appcomponentdata: any;
    appdataloaded = false;
    parentNativeElementLegend: any;
    selectedRegion: string;

    detailReportOption: any;

    // colorRange = ["red", "green"];
    // colorRange = ["#ffe6e6", "#800000"];
    @Output() regionSelected: EventEmitter<any> = new EventEmitter<any>();

    constructor(private element: ElementRef) { }

    onResize(event) {
        this.setup();
        this.initSvg();
        this.getProjection();
        this.getPath();
        this.getTooltip();
        this.drawMap(this.globalRegionData);
    }

    ngAfterViewInit(): void {
        this.setup();
        this.initSvg();
        this.parseD3Data(this.regions);
    }

    setup() {
        d3.select(this.element.nativeElement.querySelector('div#d3RegionMap')).html("");
        this.parentNativeElement = this.element.nativeElement.querySelector('div#d3RegionMap');
        this.width = parseInt(d3.select(this.element.nativeElement.querySelector('div#d3RegionMap')).style("width")) - this.margin.left - this.margin.right;
        this.height = parseInt(d3.select(this.element.nativeElement.querySelector('div#d3RegionMap')).style("height")) - this.margin.top - this.margin.bottom;
        // this.height = 600;
        // debugger
    }

    // ngOnChanges(): void {
    //     if (this.regions) {
    // this.parseD3Data(this.regions);
    // this.setup();
    // this.initSvg();
    // this.parseD3Data(this.regions);
    //     }
    // }

    parseD3Data(regions: any): void {
        if (regions) {
            let regionData = {};
            regions.forEach(r => {
                regionData[r.region] = {
                    id: r.region,
                    name: r.region,
                }
            });

            regionData['maxval'] = 1600;

            this.clearSvg();
            this.getProjection();
            this.getPath();
            this.getTooltip();
            this.drawMap(regionData);
            this.globalRegionData = regionData;
        }
    }

    clearSvg(): void {
        this.svg ? this.svg.html("") : null;
    }

    initSvg(): void {
        if (this.parentNativeElement !== null) {
            this.svg = d3.select(this.parentNativeElement)
                .append('svg')
                .attr("width", this.width)
                .attr("height", this.height)
                .append("g")
                .attr("transform", "translate(" + this.margin.left + "," + (this.margin.top + this.toplavelsvgheight) + ")")
                .append("g")
                .attr("width", this.width)
                .attr("height", this.height);
        }
    }

    getProjection(): void {
        this.projection = d3.geoMercator()
            .rotate([this.rotate, 0])
            .scale(1.1)
            .translate([this.width / 2, this.height / 2]);

        // set up the scale extent and initial scale for the projection
        var b = this.mercatorBounds(this.projection, this.maxlat),
            s = this.width / (b[1][0] - b[0][0]),
            scaleExtent = [s, 10 * s];

        this.projection
            .scale(scaleExtent[0]);
    }

    getPath(): void {
        this.path = d3.geoPath()
            .projection(this.projection);
    }

    // find the top left and bottom right of current projection
    mercatorBounds(projection, maxlat) {
        var yaw = projection.rotate()[0],
            xymax = projection([-yaw + 180 - 1e-6, -maxlat]),
            xymin = projection([-yaw - 180 + 1e-6, maxlat]);

        return [xymin, xymax];
    }

    getTooltip(): void {
        this.tooltipGroup = d3.select(this.parentNativeElement)
            .append("div")
            .attr("class", "tooltipcss").style("opacity", 0);
    }

    drawMap(data): void {
        let that = this;
        d3.json(this.worldMapJson).then((collection: any) => {
            this.selectionMap = this.svg.selectAll("path")
                .data(collection.features);

            // let color = d3.scaleLinear<string>()
            //     .range(this.colorRange);

            this.selectionMap.enter().append("path")
                .attr("class", (d) => { return "subunit " + d.id; })
                .attr("d", this.path)
                .attr("fill", "gray")
                .attr("stroke", "transparent");

            this.svg.append("g")
                .attr("class", "region-bubble")
                .attr("fill", "#F1853B")
                .selectAll("circle")
                .data(collection.features)
                // .enter().append("circle")
                // .attr("stroke", "#F1853B")
                // .attr("fill", "#F1853B")
                .enter().append("g")
                .append("svg:image")
                .attr("xlink:href", (d) => {
                    let region = this.regions.find(r => r.region === d.id)
                    if (region && region.count > 0) { return '../../../../../assets/svg/aws/aws-cloud.svg' }
                    // if (Object.keys(this.regions).indexOf(d.id) > -1) { return '../../../../../assets/svg/aws/aws-cloud.svg' } 
                })
                .attr("x", (d) => { return -16; })
                .attr("y", (d) => { return -16; })
                .attr("height", 24)
                .attr("width", 24)
                .text("hiiii")
                .attr("transform", (d) => {
                    return "translate(" + this.path.centroid(d) + ")";
                })
                .on("click", (d, i) => {
                    that.regionSelected.emit(d.id)
                })
            this.svg.selectAll("circle")
                .data(collection.features)
                .attr("class", "region-lable")
                // .enter().append("circle")
                // .attr("stroke", "#F1853B")
                // .attr("fill", "#F1853B")
                .enter().append("text")
                .text(d => {
                    let region = this.regions.find(r => r.region === d.id)
                    if (region && region.count > 0) { return `${d.id} [${region.count}]` }
                    // if (this.regions.indexOf(d.id) > -1) { return d.id } 
                })
                .attr("class", "region-lable")

                // .append("svg:image")
                // .attr("xlink:href", (d) => { if (this.regions.indexOf(d.id) > -1) { return '../../../../../assets/svg/aws/aws-cloud.svg' } })
                .attr("x", (d) => { return 12; })
                .attr("y", (d) => { return 0; })
                // .attr("height", 24)
                // .attr("width", 24)
                .attr("transform", (d) => {
                    return "translate(" + this.path.centroid(d) + ")";
                })
                .on("click", (d, i) => {
                    // if(this.regions.indexOf(d.id) > -1){
                    that.regionSelected.emit(d.id)
                    // }
                })
            // this.svg.selectAll("circle")
            //     .attr("r", (d) => {
            //         if (data.hasOwnProperty(d.id)) {
            //             return 12;
            //         }
            //     })
            //     .attr("circleClicked", "No")
            //     .attr("class", (d) => {
            //         if (data.hasOwnProperty(d.id)) {
            //             return "resource-region";
            //         }
            //     })
            //     .style("cursor", "pointer")
            //     .attr("fill", (d) => {
            //         if (data.hasOwnProperty(d.id)) {
            //             return color(data[d.id].totalcost);
            //         }
            //     })
            //     .on("click", function (d, i) {
            //         if (d3.select(this).attr("circleClicked") == "No") {
            //             console.log(d);
            //             d3.selectAll("[circleClicked=Yes]")
            //                 .attr("circleClicked", "No")
            //                 .transition()
            //                 .duration(500)
            //                 .attr("stroke", "none");

            //             d3.select(this)
            //                 .attr("circleClicked", "Yes")
            //                 .transition()
            //                 .duration(500)
            //                 .attr("stroke", "blue")
            //                 .attr("stroke-width", 2);
            //             // that.regionSelected.emit({region:d.id, height: that.height})
            //         }
            //         else if (d3.select(this).attr("circleClicked") == "Yes") {
            //             d3.select(this)
            //                 .attr("circleClicked", "No")
            //                 .transition()
            //                 .duration(500)
            //                 .attr("stroke", "none");

            //         }

            //     })
            //     .on("mouseover", (d) => {
            //         // let tooltext = d.properties.name + "<br/>"
            //         //     + "Region : " + d.id + "<br/>";
            //         // if (data.hasOwnProperty(d.id)) {
            //         //     tooltext = "<i class='light'>" + d.properties.name + "</i><br/>"
            //         //         + " <i class='light'> Region : " + data[d.id].name + "</i><br/>"


            //         // }
            //         // this.tooltipGroup.transition()
            //         //     .duration(200)
            //         //     .style("opacity", .9);
            //         // this.tooltipGroup.html(tooltext)
            //         //     .style("left", (d3.event.pageX) + "px")
            //         //     .style("top", (d3.event.pageY + 20) + "px");
            //     })
            //     .on("mousemove", (d) => {
            //         this.tooltipGroup
            //             .style("top", (d3.event.pageY + 20) + "px")
            //             .style("left", (d3.event.pageX - 100) + "px");
            //     })
            //     .on("mouseout", (d) => {
            //         this.tooltipGroup.transition()
            //             .duration(500)
            //             .style("opacity", 0);
            //     });
        })
    }

}
