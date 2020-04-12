import { Component, ElementRef, EventEmitter, ViewChild, Input, Output } from '@angular/core';
import * as d3 from 'd3';
import * as cola from 'webcola';

@Component({
  selector: 'cops-d3-grouped-force-directed',
  templateUrl: './d3-grouped-force-directed.component.html',
  styleUrls: ['./d3-grouped-force-directed.component.scss']
})
export class D3GroupedForceDirectedComponent {
  @ViewChild('d3GroupedForcedDirected', null) d3GroupedForcedDirected: ElementRef;
  // @ViewChild('d3GroupClustering', null)
  // private chartContainer: ElementRef;
  private selectedTarget;
  private parentNativeElement: any;
  private margin = { top: 50, right: 0, bottom: 30, left: 0 };
  private width: number;
  private height: number;
  private svg: any;
  private color: any;
  private simulation: any;
  globalRegionData: any;
  private colaD3;
  private data;

  @Input('vpcData')
  set vpcData(data) {
    this.data = data;
    // this.height = value.height;
    // this.width = value.width;
    this.clearSvg();
    this.setup();
  }
  // @Input() vpcData: any;
  // ngOnChanges(changes: any) {
  //   //check if this isn't the first change of myInput
  //   this.data = this.vpcData.data;
  //   this.height = this.vpcData.height;
  //   this.width = this.vpcData.width;
  //   if(!changes['vpcData'].isFirstChange()) {
  //     //do something
  //     debugger
  //     this.clearSvg();
  //     this.setup();
  //   }
  // }
  @Output() resourceSelect: EventEmitter<any> = new EventEmitter<any>();
  @Output() onStabilize: EventEmitter<any> = new EventEmitter<any>();
  valueline;
  paths;
  groups;
  groupIds;
  scaleFactor;
  polygon;
  centroid;
  node;
  link;
  curveTypes = ['curveBasisClosed', 'curveCardinalClosed', 'curveCatmullRomClosed', 'curveLinearClosed'];
  colors = ["#2777B4", "#AEC7E8", "#EF7175", "#F17E3A", "#F7BB77", "#49A02D", "#98DF8A", "#D6322D", "#F29795", "#9467BD", "#C5B0D5", "#41998D", "#F3CE67"];

  // logos = {
  //   Instances: 'M53.5,28.5v-2h-3a2.18,2.18,0,0,0-2-2v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3a2.18,2.18,0,0,0-2,2h-3v2h3v3h-3v2h3v3h-3v2h3v3h-3v2h3v3h-3v2h3a2.18,2.18,0,0,0,2,2v3h2v-3h3v3h2v-3h3v3h2v-3h3v3h2v-3h3v3h2v-3a2.18,2.18,0,0,0,2-2h3v-2h-3v-3h3v-2h-3v-3h3v-2h-3v-3h3v-2h-3v-3Zm-5,19.82a.18.18,0,0,1-.18.18H26.68a.18.18,0,0,1-.18-.18V26.68a.18.18,0,0,1,.18-.18H48.32a.18.18,0,0,1,.18.18Z',
  //   DBInstances: 'M51,22c-10,0-17.63,3.21-17.63,7.48v37C33.37,70.79,41,74,51,74s17.62-3.21,17.62-7.48v-37C68.62,25.21,61.05,22,51,22Zm0,2c9.21,0,15.62,2.89,15.62,5.48S60.21,35,51,35s-15.63-2.88-15.63-5.47S41.79,24,51,24Zm0,48c-9.21,0-15.63-2.89-15.63-5.48v-7.8C38.26,61.09,44,62.64,51,62.64s12.73-1.55,15.62-3.92v7.8C66.62,69.11,60.21,72,51,72Zm0-11.36c-9.21,0-15.63-2.89-15.63-5.48V46C38.26,48.36,44,49.91,51,49.91S63.73,48.36,66.62,46v9.16C66.62,57.75,60.21,60.64,51,60.64Zm0-12.73c-9.21,0-15.63-2.89-15.63-5.48V33C38.26,35.41,44,37,51,37S63.73,35.41,66.62,33v9.39C66.62,45,60.21,47.91,51,47.91Z',
  //   LoadBalancers: 'M45.5,36.83a5.44,5.44,0,0,0-1,10.78V52h-6V34.93a5.44,5.44,0,1,0-2,0V47h-6V45.07a5.44,5.44,0,1,0-2,0V48a1,1,0,0,0,1,1h7V60h2V54h7a1,1,0,0,0,1-1V47.61a5.44,5.44,0,0,0-1-10.78ZM26.06,39.74a3.44,3.44,0,1,1,3.44,3.43A3.44,3.44,0,0,1,26.06,39.74Zm8-10.15A3.44,3.44,0,1,1,37.5,33,3.44,3.44,0,0,1,34.06,29.59ZM45.5,45.71a3.44,3.44,0,1,1,3.44-3.44A3.44,3.44,0,0,1,45.5,45.71Z',
  //   NatGateways: "M14.075,9.531c0,0-2.705-1.438-5.158-1.438c-2.453,0-4.862,0.593-4.862,0.593L3.971,9.869c0,0,0.19,0.19,0.528,0.53c0.338,0.336,0.486,3.741,1.838,5.094c1.353,1.354,4.82,1.396,5.963,0.676c1.14-0.718,2.241-3.466,2.241-4.693c0-0.38,0-0.676,0-0.676c0.274-0.275,1.615-0.303,1.917,0c0,0,0,0.296,0,0.676c0,1.227,1.101,3.975,2.241,4.693c1.144,0.72,4.611,0.678,5.963-0.676c1.355-1.353,1.501-4.757,1.839-5.094c0.338-0.34,0.528-0.53,0.528-0.53l-0.084-1.183c0,0-2.408-0.593-4.862-0.593c-2.453,0-5.158,1.438-5.158,1.438C16.319,9.292,14.737,9.32,14.075,9.531z",
  //   NetworkAcls: "M14.075,9.531c0,0-2.705-1.438-5.158-1.438c-2.453,0-4.862,0.593-4.862,0.593L3.971,9.869c0,0,0.19,0.19,0.528,0.53c0.338,0.336,0.486,3.741,1.838,5.094c1.353,1.354,4.82,1.396,5.963,0.676c1.14-0.718,2.241-3.466,2.241-4.693c0-0.38,0-0.676,0-0.676c0.274-0.275,1.615-0.303,1.917,0c0,0,0,0.296,0,0.676c0,1.227,1.101,3.975,2.241,4.693c1.144,0.72,4.611,0.678,5.963-0.676c1.355-1.353,1.501-4.757,1.839-5.094c0.338-0.34,0.528-0.53,0.528-0.53l-0.084-1.183c0,0-2.408-0.593-4.862-0.593c-2.453,0-5.158,1.438-5.158,1.438C16.319,9.292,14.737,9.32,14.075,9.531z",
  //   // NatGateways: "M14.075,9.531c0,0-2.705-1.438-5.158-1.438c-2.453,0-4.862,0.593-4.862,0.593L3.971,9.869c0,0,0.19,0.19,0.528,0.53c0.338,0.336,0.486,3.741,1.838,5.094c1.353,1.354,4.82,1.396,5.963,0.676c1.14-0.718,2.241-3.466,2.241-4.693c0-0.38,0-0.676,0-0.676c0.274-0.275,1.615-0.303,1.917,0c0,0,0,0.296,0,0.676c0,1.227,1.101,3.975,2.241,4.693c1.144,0.72,4.611,0.678,5.963-0.676c1.355-1.353,1.501-4.757,1.839-5.094c0.338-0.34,0.528-0.53,0.528-0.53l-0.084-1.183c0,0-2.408-0.593-4.862-0.593c-2.453,0-5.158,1.438-5.158,1.438C16.319,9.292,14.737,9.32,14.075,9.531z"
  // };
  icons = {
    Instances: '../../../../../assets/svg/aws/ec2.svg',
    InstancesStopped: '../../../../../assets/svg/aws/ec2-down.svg',
    DBInstances: '../../../../../assets/svg/aws/amazon-rds.svg',
    network: '../../../../../assets/svg/aws/load-balancer.svg',
    classic: '../../../../../assets/svg/aws/load-balancer.svg',
    application: '../../../../../assets/svg/aws/application-load-balancer.svg',
    NatGateways: '../../../../../assets/svg/aws/vpc-nat-gateway.svg',
    NetworkAcls: '../../../../../assets/svg/aws/network-access-control-list.svg'
    // NatGateways: "M14.075,9.531c0,0-2.705-1.438-5.158-1.438c-2.453,0-4.862,0.593-4.862,0.593L3.971,9.869c0,0,0.19,0.19,0.528,0.53c0.338,0.336,0.486,3.741,1.838,5.094c1.353,1.354,4.82,1.396,5.963,0.676c1.14-0.718,2.241-3.466,2.241-4.693c0-0.38,0-0.676,0-0.676c0.274-0.275,1.615-0.303,1.917,0c0,0,0,0.296,0,0.676c0,1.227,1.101,3.975,2.241,4.693c1.144,0.72,4.611,0.678,5.963-0.676c1.355-1.353,1.501-4.757,1.839-5.094c0.338-0.34,0.528-0.53,0.528-0.53l-0.084-1.183c0,0-2.408-0.593-4.862-0.593c-2.453,0-5.158,1.438-5.158,1.438C16.319,9.292,14.737,9.32,14.075,9.531z"
  };
  nodesList = [
    {
      name: 'Instance',
      type: 'Instances',
      hidden: false
    },
    {
      name: 'Instance (Stopped)',
      type: 'InstancesStopped',
      hidden: false
    },
    {
      name: 'DB Instance',
      type: 'DBInstances',
      hidden: false
    },
    {
      name: 'Network Balancer',
      type: 'network',
      hidden: false
    },
    {
      name: 'Classic Balancer',
      type: 'classic',
      hidden: false
    },
    {
      name: 'Application Balancer',
      type: 'application',
      hidden: false
    },
    {
      name: 'Nat Gateway',
      type: 'NatGateways',
      hidden: false
    },
    {
      name: 'Network Acl',
      type: 'NetworkAcls',
      hidden: false
    }
  ];
  linksList = [
    {
      name: 'Association',
      type: 'association',
      hidden: false
    },
    {
      name: 'Connection',
      type: 'link',
      hidden: false
    }
  ]
  constructor(
    private element: ElementRef
  ) { }

  // ngAfterViewInit() {
  //   const element = this.d3GroupedForcedDirected.nativeElement;
  //   this.clearSvg();
  //   this.setup();
  // }
  setup() {
    const element = this.d3GroupedForcedDirected.nativeElement;
    this.parentNativeElement = element;
    // d3.select(this.element.nativeElement.querySelector('div#d3GroupedForcedDirected')).html("");
    // this.parentNativeElement = this.element.nativeElement.querySelector('div#d3GroupedForcedDirected');
    // this.width = parseInt(d3.select(this.element.nativeElement.querySelector('div#d3GroupedForcedDirected')).style("width")) - this.margin.left - this.margin.right;
    // this.height = parseInt(d3.select(this.element.nativeElement.querySelector('div#d3GroupedForcedDirected')).style("height")) - this.margin.top - this.margin.bottom;
    // this.height = this.height - this.margin.top - this.margin.bottom;
    this.width = element.offsetWidth;
    this.height = element.offsetHeight;
    this.initSvg();
  }


  // drag nodes
  dragstarted(d) {
    // if (!d3.event.active) this.simulation.alphaTarget(0.3).restart();
    // d.fx = d.x;
    // d.fy = d.y;
  }

  dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  dragended(d) {
    if (!d3.event.active) this.simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }


  initSvg() {
    if (this.svg) {
      this.drawGraph();
      return;
    }
    if (this.parentNativeElement !== null) {
      this.color = d3.scaleOrdinal().range(this.colors);

      this.colaD3 = cola.d3adaptor(d3)
        .size([this.width, this.height]);
      this.svg = d3.select(this.parentNativeElement)
        .append('svg')
        .attr("width", this.width)
        .attr("height", this.height)
      this.drawGraph();
    }

  }
  drawGraph() {
    const that = this
    const graph: any = this.data;
    // graph.links = [];
    let groupMap = {};
    graph.nodes.forEach((v, i) => {
      // let g = v.group;
      let g = v.SubnetId;
      if (typeof groupMap[g] == 'undefined') {
        groupMap[g] = [];
      }
      groupMap[g].push(i);
      v.width = 24;
      v.height = 24;
    });
    let groups = [];
    for (let g in groupMap) {
      if (g !== 'undefined') {
        groups.push({ id: g, leaves: groupMap[g] });
      }
    }
    this.colaD3
      .nodes(graph.nodes)
      .links(graph.links)
      .groups(groups)
      .jaccardLinkLengths(70, 0.7)
      .avoidOverlaps(true)
      // .start(50, 0, 50);
      .start(20, 0, 10);

    let group = this.svg.selectAll(".group")
      .data(groups)
      .enter()
      .append("g")
      .append("rect")
      .classed("group", true)
      .attr("rx", 5).attr("ry", 5)
      .style("fill", (d) => { return this.color(d.id); })
      .call(this.colaD3.drag);

    let link = this.svg.selectAll(".link")
      .data(graph.links)
      .enter().append("line")
      .attr("class", d => d.type === 'association' ? 'association' : 'link')
      .style("stroke-width", (d: any) => { return Math.sqrt(d.value); });

    let node = this.svg.selectAll(".node")
      .append('g')
      .attr('class', 'nodes')
      .data(graph.nodes)
      .enter().append('g')
      .attr("class", "node")
      .attr('opacity', 1)
      .append("svg:image")
      .attr("xlink:href", (d) => { return this.icons[d.type] })
      .attr("height", 24)
      .attr("width", 24)
      .call(this.colaD3.drag)
      .html('d.name')
      .on("click", (d, event) => {
        this.resourceSelect.emit(d);
        if (this.selectedTarget) {
          d3.select(this.selectedTarget)
            .attr('class', null)
        }
        d3.select(d3.event.currentTarget)
          .attr("class", 'selected-resource')
        this.selectedTarget = d3.event.currentTarget;
      });

    let text = this.svg.append("g")
      .attr("class", "labels")
      .selectAll("text")
      .data(groups)
      .enter().append("text")
      .style("fill", (d) => { return this.color(d.id); })
      // .text((d) => { return d.type === 'Invisible' ? d.id : null });
      .text((d) => { return d.id });

    node.append("title")
      .text((d: any) => { return d.type; });
    this.colaD3.on('tick', () => {
      link.attr("x1", (d: any) => { return d.source.x; })
        .attr("y1", (d: any) => { return d.source.y; })
        .attr("x2", (d: any) => { return d.target.x; })
        .attr("y2", (d: any) => { return d.target.y; });
      node.attr("cx", (d: any) => { return d.x; })
        .attr("cy", (d: any) => { return d.y; })
        .attr("transform", (d: any) => { return "translate(" + (d.x - 12) + "," + (d.y - 12) + ")"; });
      text.attr("x", (d) => { return d.bounds.x + 5 })
        .attr("y", (d) => { return d.bounds.y + d.bounds.height() - 5 })
      group
        .attr('x', (d: any) => { return d.bounds.x })
        .attr('y', (d: any) => { return d.bounds.y })
        .attr('width', (d: any) => { return d.bounds.width() })
        .attr('height', (d: any) => { return d.bounds.height() })
    }).on('end', () => {
      this.onStabilize.emit();
    });
    this.onHideLink('association');
  }

  clearSvg(): void {
    this.svg ? this.svg.html("") : null;
    // this.data = null;
    // this.parentNativeElement = null;
  }

  ngOnDestroy() {
    this.clearSvg();
    this.data = null;
  }

  onHideLink(type) {
    const selectedLink = this.linksList.find(link => link.type === type);
    selectedLink.hidden = !selectedLink.hidden;
    this.svg.selectAll(`.${type}`)
      .classed('hidden', selectedLink.hidden)
  }

  onHideNode(type) {
    const selectedNode = this.nodesList.find(node => node.type === type);
    selectedNode.hidden = !selectedNode.hidden;
    this.svg.selectAll(`.node`)
      .classed('hidden', (r) => {
        if (r.type !== "Invisible") {
          const nodeType = this.nodesList.find(node => node.type === r.type);
          return nodeType.hidden;
        }
      })
  }
}
