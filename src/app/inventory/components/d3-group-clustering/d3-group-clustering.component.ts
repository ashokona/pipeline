import { Component, ViewChild, OnChanges, ElementRef, EventEmitter, AfterViewInit, Input, Output, ChangeDetectorRef } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'cops-d3-group-clustering',
  templateUrl: './d3-group-clustering.component.html',
  styleUrls: ['./d3-group-clustering.component.scss']
})
export class D3GroupClusteringComponent {
  @ViewChild('d3GroupClustering', null)
  private d3GroupClustering: ElementRef;
  @Input('regionData') 
  set vpcData(data) {
    if(data.length > 0) {
      this.data = data;
      this.clearSvg();
      this.setup();
    }
  };
  @Output() vpcSelect: EventEmitter<any> = new EventEmitter<any>();
  private data;
  private parentNativeElement: any;
  private margin = { top: 20, right: 0, bottom: 20, left: 0 };
  // private margin = { top: 0, right: 0, bottom: 0, left: 0 };
  private width: number;
  private height: number;
  private svg: any;
  private simulation: any;
  private color: any;
  private radius = 25;
  private centerScale;
  private forceStrength;
  private centerX;
  private centerY;
  private strength;
  private focusedNode;
  node;
  colorTheme = {
    Vpcs: '#A264F7',
    APP: '#ED4B89'
  }
  // colors = ['#F29795', '#2777B4', '#D6322D', '#61B2A7', '#49A02D', '#AEC7E8', '#F29795', '#F4CA9A', '#C5B0D5', '#9467BD', '#C5B0D5' ]
  colors = ["#2777B4", '#BC85F9', '#60DBC6', '#CF6679', "#AEC7E8", "#EF7175", "#F17E3A", "#F7BB77", "#49A02D", "#98DF8A", "#D6322D", "#F29795", "#9467BD", "#C5B0D5","#41998D", "#F3CE67"];

  // private data;
  private mockData = [
    { "id": "vpc-0f1f9218574108b6d", "type": "Vpc" },
    { "ID": "vpc-0f1f9218574108b6d", "type": "Application" },
    { "id": "vpc-0f1f9218574108b6d", "type": "Vpc" }
  ]

  logos = {
    // Vpcs: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75"><defs><style>.cls-1{fill:#f90;}.cls-2{fill:#232f3e;}</style></defs><title>Amazon-EC2_dark-bg</title><g id="Working"><rect id="Orange_Dark_BG" data-name="Orange Dark BG" class="cls-1" width="75" height="75"/><g id="Product_Icon" data-name="Product Icon"><path class="cls-2" d="M60.49,40.5h-5v-2h5v-24h-24v5h-2v-5a2,2,0,0,1,2-2h24a2,2,0,0,1,2,2v24A2,2,0,0,1,60.49,40.5Z"/><path class="cls-2" d="M38.49,62.5h-24a2,2,0,0,1-2-2v-24a2,2,0,0,1,2-2h5v2h-5v24h24v-5h2v5A2,2,0,0,1,38.49,62.5Z"/><path class="cls-2" d="M53.5,28.5v-2h-3a2.18,2.18,0,0,0-2-2v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3a2.18,2.18,0,0,0-2,2h-3v2h3v3h-3v2h3v3h-3v2h3v3h-3v2h3v3h-3v2h3a2.18,2.18,0,0,0,2,2v3h2v-3h3v3h2v-3h3v3h2v-3h3v3h2v-3h3v3h2v-3a2.18,2.18,0,0,0,2-2h3v-2h-3v-3h3v-2h-3v-3h3v-2h-3v-3h3v-2h-3v-3Zm-5,19.82a.18.18,0,0,1-.18.18H26.68a.18.18,0,0,1-.18-.18V26.68a.18.18,0,0,1,.18-.18H48.32a.18.18,0,0,1,.18.18Z"/></g></g></svg>',
    Vpcs: "M14.615,4.928c0.487-0.986,1.284-0.986,1.771,0l2.249,4.554c0.486,0.986,1.775,1.923,2.864,2.081l5.024,0.73c1.089,0.158,1.335,0.916,0.547,1.684l-3.636,3.544c-0.788,0.769-1.28,2.283-1.095,3.368l0.859,5.004c0.186,1.085-0.459,1.553-1.433,1.041l-4.495-2.363c-0.974-0.512-2.567-0.512-3.541,0l-4.495,2.363c-0.974,0.512-1.618,0.044-1.432-1.041l0.858-5.004c0.186-1.085-0.307-2.6-1.094-3.368L3.93,13.977c-0.788-0.768-0.542-1.525,0.547-1.684l5.026-0.73c1.088-0.158,2.377-1.095,2.864-2.081L14.615,4.928z",
    EC2: "M53.5,28.5v-2h-3a2.18,2.18,0,0,0-2-2v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3h-3v-3h-2v3a2.18,2.18,0,0,0-2,2h-3v2h3v3h-3v2h3v3h-3v2h3v3h-3v2h3v3h-3v2h3a2.18,2.18,0,0,0,2,2v3h2v-3h3v3h2v-3h3v3h2v-3h3v3h2v-3h3v3h2v-3a2.18,2.18,0,0,0,2-2h3v-2h-3v-3h3v-2h-3v-3h3v-2h-3v-3h3v-2h-3v-3Zm-5,19.82a.18.18,0,0,1-.18.18H26.68a.18.18,0,0,1-.18-.18V26.68a.18.18,0,0,1,.18-.18H48.32a.18.18,0,0,1,.18.18Z",
    // RDS: "M14.075,9.531c0,0-2.705-1.438-5.158-1.438c-2.453,0-4.862,0.593-4.862,0.593L3.971,9.869c0,0,0.19,0.19,0.528,0.53c0.338,0.336,0.486,3.741,1.838,5.094c1.353,1.354,4.82,1.396,5.963,0.676c1.14-0.718,2.241-3.466,2.241-4.693c0-0.38,0-0.676,0-0.676c0.274-0.275,1.615-0.303,1.917,0c0,0,0,0.296,0,0.676c0,1.227,1.101,3.975,2.241,4.693c1.144,0.72,4.611,0.678,5.963-0.676c1.355-1.353,1.501-4.757,1.839-5.094c0.338-0.34,0.528-0.53,0.528-0.53l-0.084-1.183c0,0-2.408-0.593-4.862-0.593c-2.453,0-5.158,1.438-5.158,1.438C16.319,9.292,14.737,9.32,14.075,9.531z",
    RDS: 'M36.44,46.52h-14c-5.48,0-9.67-3.66-9.95-8.69,0-.21,0-.45,0-.69a9.23,9.23,0,0,1,6.79-9.28c0-.27,0-.53,0-.8a13.64,13.64,0,0,1,23.42-9.25,15.28,15.28,0,0,1,3.14,4.49,6.17,6.17,0,0,1,3.87-1.36c2.9,0,6,2.07,6.51,6.68a11,11,0,0,1,6.3,3.73l-1.57,1.23a9.53,9.53,0,0,0-5.81-3.16,1,1,0,0,1-.84-.93c-.23-3.83-2.47-5.55-4.59-5.55a4.31,4.31,0,0,0-3.42,1.74,1,1,0,0,1-.94.39,1,1,0,0,1-.79-.65,13.83,13.83,0,0,0-3.25-5.17,11.65,11.65,0,0,0-20,7.81,13.55,13.55,0,0,0,.08,1.43,1,1,0,0,1-.75,1.07c-2.27.56-6.1,2.3-6.1,7.58a4.87,4.87,0,0,0,0,.54c.22,4,3.57,6.84,8,6.84h14Z"/><path class="cls-2" d="M50.44,61.26c-11.86,0-12-13.33-12-13.46V35.63a1,1,0,0,1,.65-.94l11-4.07a1.05,1.05,0,0,1,.7,0l11,4.07a1,1,0,0,1,.65.94V48.55C62.44,48.68,62.3,61.26,50.44,61.26Zm-10-24.93V47.8c0,.47.14,11.46,10,11.46s10-10.27,10-10.71V36.33l-10-3.71Z M50.44,57.52c-6.36,0-7.92-8.07-8-8.41a.55.55,0,0,1,0-.18V38.57a1,1,0,0,1,.63-.93l7-2.76a1,1,0,0,1,.74,0l7,2.76a1,1,0,0,1,.63.93V48.93a1.1,1.1,0,0,1,0,.18C58.36,49.45,56.8,57.52,50.44,57.52Zm-6-8.69c.16.76,1.59,6.69,6,6.69s5.84-5.92,6-6.69V39.25l-6-2.36-6,2.36Z M50.44,57.52c-6.36,0-7.92-8.07-8-8.41a.55.55,0,0,1,0-.18V38.57a1,1,0,0,1,.63-.93l7-2.76a1,1,0,0,1,.74,0l7,2.76a1,1,0,0,1,.63.93V48.93a1.1,1.1,0,0,1,0,.18C58.36,49.45,56.8,57.52,50.44,57.52Zm-6-8.69c.16.76,1.59,6.69,6,6.69s5.84-5.92,6-6.69V39.25l-6-2.36-6,2.36Z'
  };
  format: (n: number | { valueOf(): number; }) => string;
  scaleColor: d3.ScaleOrdinal<string, unknown>;
  pack: d3.PackLayout<unknown>;
  forceCollide: d3.ForceCollide<d3.SimulationNodeDatum>;
  root: d3.HierarchyNode<{ children: any; }>;
  nodes: {
    x: any; // magnify start position to have transition to center movement
    y: any; r: number; // for tweening
    radius: number; //original radius
    id: string; cat: any; name: any; value: any; icon: any; desc: any;
  }[];
  constructor(private element: ElementRef, private changeDetect: ChangeDetectorRef) { }


  ngAfterViewInit(): void {
    // this.setup();
  }

  onResize(event) {
    // this.clearSvg();
    // this.setup();
    // this.setup();
    // this.initSvg();
    // this.drawGraph();
  }
  clearSvg(): void {
    this.svg ? this.svg.html("") : null;
  }
  setup() {
    const element = this.d3GroupClustering.nativeElement;
    this.parentNativeElement = element;
    this.width = element.offsetWidth
    // d3.select(this.element.nativeElement.querySelector('div#d3GroupClustering')).html("");
    // this.parentNativeElement = this.element.nativeElement.querySelector('div#d3GroupClustering');
    // this.width = parseInt(d3.select(this.element.nativeElement.querySelector('div#d3GroupClustering')).style("width")) - this.margin.left - this.margin.right;
    // this.height = parseInt(d3.select(this.element.nativeElement.querySelector('div#d3GroupClustering')).style("height")) - this.margin.top - this.margin.bottom;
    // this.width = 1000;
    // this.height = 782;
    this.height = element.offsetHeight;
    // this.height = this.height - this.margin.bottom - this.margin.top;
    this.initSvg();
  }
  initSvg(): void {

    if (this.parentNativeElement) {
      this.svg = d3.select(this.parentNativeElement)
        .append('svg')
        .attr("width", this.width)
        .attr("height", this.height)
      this.centerX = this.width * 0.5;
      this.centerY = this.height * 0.5;
      this.strength = 0.05;
      this.format = d3.format(',d');
      // this.scaleColor = d3.scaleOrdinal(d3.schemeCategory10);
      this.scaleColor = d3.scaleOrdinal().range(this.colors);

      // this.scaleColor = d3.scaleOrdinal(['#2876B4']);
      // use pack to calculate radius of the circle
      this.pack = d3.pack()
        .size([this.width/1.6, this.height/1.6])
        // .padding(1.5);
        .padding(5.5);
      this.forceCollide = d3.forceCollide((d: any) => d.r + 1);

      this.simulation = d3.forceSimulation()
        .force('charge', d3.forceManyBody())
        .force('collide', this.forceCollide)
        .force('x', d3.forceX(this.centerX).strength(this.strength))
        .force('y', d3.forceY(this.centerY).strength(this.strength));

      this.drawGraph()  
    }else {
      // this.setup();
    }
  }

  drawGraph() {
    // if ('matchMedia' in window && window.matchMedia('(max-device-width: 767px)').matches) {
    // 	data = data.filter(el => {
    // 		return el.value >= 50;
    // 	});
    // }
    // this.data = this.data;
    this.data.map(data => {
      // let value = data.subnets.map(subnet => { return subnet.Instances.length + subnet.DBInstances.length }).reduce((a, b) => a + b, 0);
      let value = data.subnets.map(subnet => { return subnet.Instances.length }).reduce((a, b) => a + b, 0);
      data.value = value > 0 ? value : 2;
    })
    // const data: any = this.data;

    this.root = d3.hierarchy({ children: this.data })
      .sum((d: any) => d.value);
    // we use pack() to automatically calculate radius conveniently only
    // and get only the leaves
    this.nodes = this.pack(this.root).leaves().map(node => {
      // debugger
      // console.log('node:', node.x, (node.x - this.centerX) * 2);
      let data: any = node.data;
      let EC2SLength = 0;
      // let DBInstancesLength = 0;
      data.subnets.map(subnet => {
        EC2SLength = EC2SLength + subnet.Instances.length;
        // DBInstancesLength = DBInstancesLength + subnet.DBInstances.length;
      })
      let name = data.type === 'Vpcs' ? data.VpcId + '<br>' : data.AppId + '<br>';
      let subnets = data.subnets.length > 0 ? 'Subnets: ' + data.subnets.length + '<br>' : '';
      let ec2s = EC2SLength > 0 ? 'EC2S: ' + EC2SLength + '<br>' : '';
      // let DBInstances = DBInstancesLength > 0 ? 'DBInstances: ' + DBInstancesLength + '<br>' : '';
      let desc = `${name} ${subnets} ${ec2s}`

      data.description = desc;
      // let formatedData = {
      //   x: this.centerX + (node.x - this.centerX) * 3, // magnify start position to have transition to center movement
      //   y: this.centerY + (node.y - this.centerY) * 3,
      //   r: 0, // for tweening
      //   radius: node.r, //original radius
      //   id: data.type === 'Vpcs' ? data.VpcId : data.AppId,
      //   // id: data.id,
      //   cat: data.type,
      //   name: data.type === 'Vpcs' ? data.VpcId : data.AppId,
      //   value: data.value > 0 ? data.value : 1,
      //   icon: data.type === 'Vpcs' ? '../../../../assets/svg/aws/Amazon-VPC_dark-bg.svg' : '../../../../assets/svg/aws/Application-Integration_dark-bg.svg',
      //   desc: data.description,
      //   type: data.type
      // }
      // let formatedData = {
        data.x = this.centerX + (node.x - this.centerX) * 3; // magnify start position to have transition to center movement
        data.y = this.centerY + (node.y - this.centerY) * 3;
        data.r = 0; // for tweening
        data.radius = node.r; //original radius
        data.id = data.type === 'Vpcs' ? data.VpcId : data.VpcId;
        // id: data.id,
        // cat: data.type,
        data.name = data.type === 'Vpcs' ? data.VpcId : data.VpcId;
        data.value = data.value > 0 ? data.value : 1;
        data.icon = (data.type === 'Vpcs' && data.VpcId !== 'classic-vpc')? '../../../../assets/svg/aws/Amazon-VPC_dark-bg.svg' : '../../../../assets/svg/aws/Application-Integration_dark-bg.svg';
        data.desc =  data.description;
        // type: data.type
      // }
      // debugger
      return data;
    });
    const radiusScale = d3.scaleSqrt().domain([1, 20]).range([2, 5]);
    this.simulation.nodes(this.nodes).on('tick', () => {
      this.node
        .attr('transform', d => `translate(${d.x},${d.y})`)
        .select('circle')
        .attr('r', d => d.r);
      // .attr('r', d => {return radiusScale(d.radius)});
    });
    // this.svg.style('background-color', '#eee');
    this.node = this.svg.selectAll('.node')
      .data(this.nodes)
      .enter().append('g')
      .attr('class', 'node')
      .call(d3.drag()
        .on('start', (d: any) => {
          if (!d3.event.active) this.simulation.alphaTarget(0.2).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (d: any) => {
          d.fx = d3.event.x;
          d.fy = d3.event.y;
        })
        .on('end', (d: any) => {
          if (!d3.event.active) this.simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }));
    this.node.append('circle')
      .attr('id', d => d.id)
      .attr('r', 0)
      // .style('fill', d => this.scaleColor(d.cat))
      .style('fill', d=> {return d.color;})
      // .style('fill', 'transparent')
      .transition().duration(1000).ease(d3.easeElasticOut)
      // .style("stroke", (d: any, i: number) => { return this.scaleColor(d.ID); })
      // .style("stroke-width", 3)
      .tween('circleIn', (d) => {
        let i = d3.interpolateNumber(0, d.radius);
        return (t) => {
          d.r = i(t);
          this.simulation.force('collide', this.forceCollide);
        }
      })
    this.node.append('clipPath')
      .attr('id', d => `clip-${d.id}`)
      .append('use')
      .attr('xlink:href', d => `#${d.id}`);
    // display text as circle icon
    this.node
      // .filter(d => !String(d.icon).includes('img/'))
      .append('text')
      .classed('node-icon', true)
      // .attr('clip-path', d => `url(#clip-${d.id})`)
      .selectAll('tspan')
      // .data(d => d.icon ? d.icon.split(';') : '')
      // .data(d => d.icon )
      .enter()
      .append('tspan')
      .attr('x', 0)
      .attr('y', (d, i, nodes) => (13 + (i - nodes.length / 2 - 0.5) * 10))
      .text(name => name);
    // display image as circle icon
    this.node
      // .filter(d => String(d.icon).includes('img/'))
      .append('image')
      .classed('node-icon', true)
      // .attr('clip-path', d => `url(#clip-${d.id})`)
      .attr('xlink:href', d => d.icon)
      .attr('x', d => - d.radius * 0.5)
      .attr('y', d => - d.radius * 0.7)
      .attr('height', d => d.radius * 2 * 0.5)
      .attr('width', d => d.radius * 2 * 0.5)
    // this.node.append('text')
    //   .text(d => {return d.id})
    //   .attr('x', d => - d.radius * 0.4)
    //   .attr('y', d => - d.radius * 0.7)
    //   .style('font-size', d => { return d.value + 1 });

    // let legendOrdinal = d3.legendColor()
    //   .scale(this.scaleColor)
    //   .shape('circle');
    // let legend = this.svg.append('g')
    //   .classed('legend-color', true)
    //   .attr('text-anchor', 'start')
    //   .attr('transform', 'translate(20,30)')
    //   .style('font-size', '12px')
    //   .call(legendOrdinal);
    // let sizeScale = d3.scaleOrdinal()
    //   .domain(['less use', 'more use'])
    //   .range([5, 10]);
    // let legendSize = d3.legendSize()
    //   .scale(sizeScale)
    //   .shape('circle')
    //   .shapePadding(10)
    //   .labelAlign('end');
    // let legend2 = this.svg.append('g')
    //   .classed('legend-size', true)
    //   .attr('text-anchor', 'start')
    //   .attr('transform', 'translate(150, 25)')
    //   .style('font-size', '12px')
    //   .call(legendSize);



    let infoBox = this.node.append('foreignObject')
      .classed('circle-overlay hidden', true)
      .attr('x', -350 * 0.5 * 0.8)
      .attr('y', -350 * 0.5 * 0.8)
      .attr('height', 350 * 0.8)
      .attr('width', 350 * 0.8)
      .append('xhtml:div')
      .classed('circle-overlay__inner', true);
    // infoBox.append('h2')
    //   .classed('circle-overlay__title', true)
    //   .text(d => d.name);
    infoBox.append('p')
      .classed('circle-overlay__body', true)
      .html(d => d.desc);
    this.node.on('mouseover', (currentNode) => {
      d3.event.stopPropagation();
      // console.log('currentNode', currentNode);
      let currentTarget = d3.event.currentTarget; // the <g> el
      if (currentNode === this.focusedNode) {
        // no focusedNode or same focused node is clicked
        return;
      }
      let lastNode = this.focusedNode;
      this.focusedNode = currentNode;
      this.simulation.alphaTarget(0.2).restart();
      // hide all circle-overlay
      d3.selectAll('.circle-overlay').classed('hidden', true);
      d3.selectAll('.node-icon').classed('node-icon--faded', false);
      // don't fix last node to center anymore
      if (lastNode) {
        lastNode.fx = null;
        lastNode.fy = null;
        this.node.filter((d, i) => i === lastNode.index)
          .transition().duration(2000).ease(d3.easePolyOut)
          .tween('circleOut', () => {
            let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);
            return (t) => {
              lastNode.r = irl(t);
            }
          })
          .on('interrupt', () => {
            lastNode.r = lastNode.radius;
          });
      }
      // if (!d3.event.active) simulation.alphaTarget(0.5).restart();
      d3.transition().duration(2000).ease(d3.easePolyOut)
        .tween('moveIn', () => {
          // console.log('tweenMoveIn', currentNode);
          let ix = d3.interpolateNumber(currentNode.x, this.centerX);
          let iy = d3.interpolateNumber(currentNode.y, this.centerY);
          let ir = d3.interpolateNumber(currentNode.r, this.centerY * 0.5);
          let x = (t) => {
            // console.log('i', ix(t), iy(t));
            currentNode.fx = ix(t);
            currentNode.fy = iy(t);
            currentNode.r = ir(t);
            this.simulation.force('collide', this.forceCollide);
          };
          return x;
        })
        .on('end', () => {
          this.simulation.alphaTarget(0);
          let $currentGroup = d3.select(currentTarget);
          $currentGroup.select('.circle-overlay')
            .classed('hidden', false);
          $currentGroup.select('.node-icon')
            .classed('node-icon--faded', true);
        })
        .on('interrupt', () => {
          // console.log('move interrupt', currentNode);
          currentNode.fx = null;
          currentNode.fy = null;
          this.simulation.alphaTarget(0);
        });
    });
    this.node.on('click', (currentNode) => {
      d3.event.stopPropagation();
    //   this.svg = d3.select(this.parentNativeElement)
    //   .append('svg')
    //   .attr("width", this.width)
    //   .attr("height", this.height)
    // this.centerX = this.width * 0.5;
    // this.centerY = this.height * 0.5;
      this.svg = d3.select(this.parentNativeElement).attr("width", 0);
      this.d3GroupClustering.nativeElement.remove();
      this.parentNativeElement = null;
      this.vpcSelect.emit({vpc:currentNode, width: this.width});
    })

    d3.select(document).on('click', () => {
      let target = d3.event.target;
      // check if click on document but not on the circle overlay
      if (!target.closest('#circle-overlay') && this.focusedNode) {
        this.focusedNode.fx = null;
        this.focusedNode.fy = null;
        this.simulation.alphaTarget(0.2).restart();
        d3.transition().duration(2000).ease(d3.easePolyOut)
          .tween('moveOut', () => {
            // console.log('tweenMoveOut', this.focusedNode);
            let ir = d3.interpolateNumber(this.focusedNode.r, this.focusedNode.radius);
            return (t) => {
              this.focusedNode.r = ir(t);
              this.simulation.force('collide', this.forceCollide);
            };
          })
          .on('end', () => {
            this.focusedNode = null;
            this.simulation.alphaTarget(0);
          })
          .on('interrupt', () => {
            this.simulation.alphaTarget(0);
          });
        // hide all circle-overlay
        d3.selectAll('.circle-overlay').classed('hidden', true);
        d3.selectAll('.node-icon').classed('node-icon--faded', false);
      }
    });

  }

  ticked() {
    this.node
      .attr('transform', d => `translate(${d.x},${d.y})`)
      .select('circle')
      .attr('r', d => d.r);
  }

  drawGraphX() {
    // d3.json(this.worldMapJson).then((graph: any) => {});
    const data: any = this.data;

    data.forEach((d: any) => {
      d.r = this.radius;
      d.x = this.width / 2;
      d.y = this.height / 2;
    })

    // console.table(data);

    let circles = this.svg.selectAll("circle")
      .data(data, (d: any) => { return d.ID; });

    let circlesEnter = circles.enter().append("circle")
      .attr("r", (d: any, i: number) => { return d.r; })
      .attr("cx", (d: any, i: number) => { return 175 + 25 * i + 2 * i ** 2; })
      .attr("cy", (d: any, i: number) => { return 250; })
      .style("fill", (d: any, i: number) => { return this.color(d.ID); })
      .style("stroke", (d: any, i: number) => { return this.color(d.ID); })
      .style("stroke-width", 10)
      .style("pointer-events", "all")
      // .on('mouseover', (d:any) => {
      //   console.log(d);
      //   // return d.r * 3;
      //   return d.value * 3;
      //   console.log(d);

      // })
      // .on('mouseout', (d:any) => {
      //   console.log(d);
      //   // return d.r * 3;
      //   return d.value * 3;
      //   console.log(d);

      // })
      .call(d3.drag()
        .on("start", this.dragstarted)
        .on("drag", this.dragged)
        .on("end", this.dragended));

    // circlesEnter.on('click', (currentNode) => {
    //   debugger
    //   d3.event.stopPropagation();
    //   console.log('currentNode', currentNode);
    //   let currentTarget = d3.event.currentTarget; // the <g> el
    //   if (currentNode === this.focusedNode) {
    //     // no focusedNode or same focused node is clicked
    //     return;
    //   }
    //   let lastNode = this.focusedNode;
    //   this.focusedNode = currentNode;
    //   this.simulation.alphaTarget(0.2).restart();
    //   // hide all circle-overlay
    //   d3.selectAll('.circle-overlay').classed('hidden', true);
    //   d3.selectAll('.node-icon').classed('node-icon--faded', false);
    //   // don't fix last node to center anymore
    //   if (lastNode) {
    //     lastNode.fx = null;
    //     lastNode.fy = null;
    //     this.node.filter((d, i) => i === lastNode.index)
    //       .transition().duration(2000).ease(d3.easePolyOut)
    //       .tween('circleOut', () => {
    //         let irl = d3.interpolateNumber(lastNode.r, lastNode.radius);
    //         return (t) => {
    //           lastNode.r = irl(t);
    //         }
    //       })
    //       .on('interrupt', () => {
    //         lastNode.r = lastNode.radius;
    //       });
    //   }
    //   // if (!d3.event.active) simulation.alphaTarget(0.5).restart();
    //   d3.transition().duration(2000).ease(d3.easePolyOut)
    //     .tween('moveIn', () => {
    //       console.log('tweenMoveIn', currentNode);
    //       let ix = d3.interpolateNumber(currentNode.x, this.centerX);
    //       let iy = d3.interpolateNumber(currentNode.y, this.centerY);
    //       let ir = d3.interpolateNumber(currentNode.r, this.centerY * 0.5);
    //       return function (t) {
    //         console.log('i', ix(t), iy(t));
    //         currentNode.fx = ix(t);
    //         currentNode.fy = iy(t);
    //         currentNode.r = ir(t);
    //         // this.simulation.force('collide', this.forceCollide);
    //       };
    //     })
    //     .on('end', () => {
    //       this.simulation.alphaTarget(0);
    //       let $currentGroup = d3.select(currentTarget);
    //       $currentGroup.select('.circle-overlay')
    //         .classed('hidden', false);
    //       $currentGroup.select('.node-icon')
    //         .classed('node-icon--faded', true);
    //     })
    //     .on('interrupt', () => {
    //       console.log('move interrupt', currentNode);
    //       currentNode.fx = null;
    //       currentNode.fy = null;
    //       this.simulation.alphaTarget(0);
    //     });
    // });

    // let circlesEnter = circles.enter().append("g")
    //   .attr("r", (d: any, i: number) => { return d.r; })
    //   .attr("cx", (d: any, i: number) => { return 175 + 25 * i + 2 * i ** 2; })
    //   .attr("cy", (d: any, i: number) => { return 250; })
    //   // .style("fill", (d: any, i: number) => { return this.color(d.ID); })
    //   .style("fill", 'transparent')
    //   .style("stroke", (d: any, i: number) => { return this.color(d.ID); })
    //   .style("stroke-width", 3)
    //   .style("pointer-events", "all")
    //   .append('path')
    //   .attr('d', (d: any) => {
    //     return this.logos.EC2;
    //   })
    //   .attr("transform", "scale(0.75)")
    //   .style("fill", (d: any) => { return this.color(d.group); })
    //   // .append("text").text((d, i) => { return d.VpcId;})
    //   .call(d3.drag()
    //     .on("start", this.dragstarted)
    //     .on("drag", this.dragged)
    //     .on("end", this.dragended));


    circles = circles.merge(circlesEnter)

    let ticked = () => {
      circles
        .attr("cx", (d: any) => { return d.x; })
        .attr("cy", (d: any) => { return d.y; })
      // .attr("transform", (d: any) => { return "translate(" + (d.x - 12) + "," + (d.y - 12) + ")"; });

    }

    this.simulation
      .nodes(data)
      .on("tick", ticked);


    function hideTitles() {
      this.svg.selectAll('.title').remove();
    }

    function showTitles(byVar, scale) {
      // Another way to do this would be to create
      // the year texts once and then just hide them.
      var titles = this.svg.selectAll('.title')
        .data(scale.domain());

      titles.enter().append('text')
        .attr('class', 'title')
        .merge(titles)
        .attr('x', function (d) { return scale(d); })
        .attr('y', 40)
        .attr('text-anchor', 'middle')
        .text(function (d) { return byVar + ' ' + d; });

      titles.exit().remove()
    }


    this.splitBubbles('type');
    this.setupButtons()

  }

  dragstarted = (d, i) => {
    // if (!d3.event.active) this.simulation.alpha(1).restart();
    // d.fx = d.x;
    // d.fy = d.y;
    // this.vpcSelect.emit(d);
  }

  dragged(d, i) {
    //console.log("dragged " + i)
    // d.fx = d3.event.x;
    // d.fy = d3.event.y;
  }

  dragended(d, i) {
    //console.log("dragended " + i)
    // if (!d3.event.active) this.simulation.alphaTarget(0);
    // d.fx = null;
    // d.fy = null;
    // var me = d3.select(this)
    // console.log(me.classed("selected"))
    // me.classed("selected", !me.classed("selected"))

    // d3.selectAll("circle")
    //   .style("fill", (d: any, i: number) => { return this.color(d.ID); })

    // d3.selectAll("circle.selected")
    //   .style("fill", "none")

  }

  setupButtons() {
    d3.selectAll('.button')
      .on('click', function () {

        // Remove active class from all buttons
        d3.selectAll('.button').classed('active', false);
        // Find the button just clicked
        var button = d3.select(this);

        // Set it as the active button
        button.classed('active', true);

        // Get the id of the button
        var buttonId = button.attr('id');

        // console.log(buttonId)
        // Toggle the bubble chart based on
        // the currently clicked button.
        // this.splitBubbles(buttonId);
      });
  }

  groupBubbles() {
    // hideTitles();

    // @v4 Reset the 'x' force to draw the bubbles to the center.
    this.simulation.force('x', d3.forceX().strength(this.forceStrength).x(this.width / 2));

    // @v4 We can reset the alpha value and restart the simulation
    this.simulation.alpha(1).restart();
  }

  splitBubbles(byVar) {

    this.centerScale.domain(this.data.map((d: any) => { return d[byVar]; }));

    if (byVar == "all") {
      // hideTitles()
    } else {
      this.showTitles(byVar, this.centerScale);
    }

    // @v4 Reset the 'x' force to draw the bubbles to their year centers
    this.simulation.force('x', d3.forceX().strength(this.forceStrength).x((d: any) => {
      return this.centerScale(d[byVar]);
    }));

    // @v4 We can reset the alpha value and restart the simulation
    this.simulation.alpha(2).restart();
  }


  showTitles(byVar, scale) {
    // Another way to do this would be to create
    // the year texts once and then just hide them.
    var titles = this.svg.selectAll('.title')
      .data(scale.domain());

    titles.enter().append('text')
      .attr('class', 'title')
      .merge(titles)
      .attr('x', function (d) { return scale(d); })
      .attr('y', 40)
      .attr('text-anchor', 'middle')
      .text(function (d) { return ' ' + d; });

    titles.exit().remove();
  }

  ngOnDestroy() {
    this.clearSvg();
    this.data = null
  }
}
