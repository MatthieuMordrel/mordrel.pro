'use client'

import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import styles from './styles/PowerBISkillsCard.module.css'

interface DataItem {
  date: Date
  value: number
}

const D3Visualization = ({ data }: { data: DataItem[] }) => {
  const d3Container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (data && d3Container.current) {
      // Clear the container each time the data changes
      d3.select(d3Container.current).selectAll('*').remove()

      const margin = { top: 20, right: 20, bottom: 30, left: 50 },
        width = 600 - margin.left - margin.right,
        height = 300 - margin.top - margin.bottom

      const svg = d3
        .select(d3Container.current)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`)

      const x = d3
        .scaleTime()
        .domain(d3.extent(data, (d) => d.date) as [Date, Date])
        .range([0, width])

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value) as number])
        .range([height, 0])

      svg
        .append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))

      svg.append('g').call(d3.axisLeft(y))

      // Add the line
      svg
        .append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#9E829C')
        .attr('stroke-width', 1.5)
        .attr(
          'd',
          d3
            .line<DataItem>()
            .x((d) => x(d.date) as number)
            .y((d) => y(d.value) as number)
        )

      // Add dots
      svg
        .selectAll('.dot')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('r', 5)
        .attr('cx', (d) => x(d.date) as number)
        .attr('cy', (d) => y(d.value) as number)
        .attr('fill', 'white')

      // Create a tooltip
      const tooltip = d3
        .select(d3Container.current)
        .append('div')
        .attr('class', styles.tooltip)

      svg
        .selectAll('.dot')
        .on('mouseover', (event, d) => {
          d3.select(event.currentTarget).attr('r', 8).attr('fill', 'white')
          tooltip.transition().duration(200).style('opacity', 0.9)
          tooltip
            // Start of Selection
            .html(
              `Date: ${(d as DataItem).date.toLocaleDateString()}<br/>Value: ${(d as DataItem).value}`
            )
            .style('left', `${event.pageX + 10}px`)
            .style('top', `${event.pageY - 28}px`)
        })
        .on('mouseout', (event, d) => {
          d3.select(event.currentTarget).attr('r', 5).attr('fill', 'white')
          tooltip.transition().duration(500).style('opacity', 0)
        })
    }
  }, [data])

  return <div className="d3-container" ref={d3Container} />
}

export default D3Visualization
