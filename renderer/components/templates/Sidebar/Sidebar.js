import React, { Component } from 'react'
import styles from './sidebarStyle'
import ProjectList from '../../organisms/ProjectList'
import AddProject from '../../molecules/AddProject'
import ResizeTrigger from '../../atoms/ResizeTrigger'

class SideBar extends Component {
	render() {
		return (
			<div className="sidebar">
				<div className="blanko">Blanko.</div>
				<ProjectList
					className="favorites"
					favorite={true}
					projects={this.props.projects}
					selectedProjectId={this.props.selectedProjectId}
					activeProjectId={this.props.activeProjectId}
					selectProject={this.props.selectProject}
					setProjectFavorite={this.props.setProjectFavorite}
				/>

				<ProjectList
					className="projectList"
					favorite={false}
					projects={this.props.projects}
					selectedProjectId={this.props.selectedProjectId}
					activeProjectId={this.props.activeProjectId}
					selectProject={this.props.selectProject}
					setProjectFavorite={this.props.setProjectFavorite}
					toggleModal={this.props.toggleModal}
				/>

				<ResizeTrigger
					sideBarNode={this.sideBarNode}
					triggerResize={this.triggerResize}
				/>

				<style jsx global>{ styles }</style>
			</div>
		)
	}
}

export default SideBar
