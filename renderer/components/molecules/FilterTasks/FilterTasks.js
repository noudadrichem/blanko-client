import React from 'react'
import ReactDOM from 'react-dom'
import Button from '../../atoms/FilterButton'
import styles from './filterTaskStyles'

class FilterTasks extends React.Component {

	constructor() {
		super()

		this.state = {
			fixed: false
		}

		this.fixedFilterTasks = this.fixedFilterTasks.bind(this)
	}

	fixedFilterTasks() {
		// const filterTasks = ReactDOM.findDOMNode(this.refs['filterTasks'])
		const filterTasks = document.querySelector('.filter-tasks')
		console.log('filterTasks', filterTasks)
		const filterOffsetTop = filterTasks.getBoundingClientRect().top
		const filterHeight = filterTasks.getBoundingClientRect().height
		console.log('filterOffsetTop', filterOffsetTop)
		console.log('filterHeight', filterHeight)
		const activeProject = document.querySelector('.active-project')
		const mainTitle = document.querySelector('.active-project .mainTitle')
		const description = document.querySelector('.active-project .description')

		const activeProjectContentHeight = description !== null ? mainTitle.offsetHeight + description.offsetHeight : mainTitle.offsetHeight
		console.log('description', description);
		console.log('window.scrollY', window.scrollY)
		if (window.scrollY >= filterOffsetTop + activeProjectContentHeight + 56) {
			this.setState({
				fixed: true
			})
			activeProject.style.paddingTop = '40px'
			window.document.body.style.paddingTop = filterHeight + 'px'
		} else {
			this.setState({
				fixed: false
			})
			activeProject.style.paddingTop = 0
			window.document.body.style.paddingTop = 0
		}
	}

	componentDidMount() {
		window.addEventListener('scroll', this.fixedFilterTasks)
	}

	render() {
		const { filteredValue, setFilteredValue, toggleAddTask } = this.props
		const { fixed } = this.state

		return(
			<div className={`filter-tasks ${fixed ? 'fixed' : ''}`} ref="filterTasks">
				<span onClick={e => toggleAddTask(e)}><img src="../../static/plus-large.svg"/></span>
				<Button onClick={e => setFilteredValue('all') } text="All" active={filteredValue === 'all'}/>
				<Button onClick={e => setFilteredValue('todo') } text="To Do" active={filteredValue === 'todo'}/>
				<Button onClick={e => setFilteredValue('done') } text="Done" active={filteredValue === 'done'}/>

				<style jsx>{ styles }</style>
			</div>


		)
	}
}

export default FilterTasks
