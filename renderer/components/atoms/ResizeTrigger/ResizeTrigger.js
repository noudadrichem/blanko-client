import React from 'react'
import styles from './ResizeTriggerStyle'
import Mousetrap from 'mousetrap'

class ResizeTrigger extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			isDragging: false,
		}

		this.onMouseDown = this.onMouseDown.bind(this)
		this.onMouseUp = this.onMouseUp.bind(this)
	}

	onMouseDown() {
		this.setState({
			isDragging: true
		}, () => {
			document.body.addEventListener('mousemove', e => {
				e.preventDefault()
				if(this.state.isDragging) {
					if(e.clientX > 200) {
						document.body.style.userSelect = 'none'
						document.documentElement.style.setProperty('--sidebar-width', (e.clientX + 2) + 'px')
					}
				}
			})
		})
	}

	onMouseUp(e) {
		e.preventDefault()
		console.log('mouse up');
		this.setState({
			isDragging: false
		}, () => {
			document.body.style.userSelect = ''
		})
	}

	render() {
		const { sideBarNode } = this.props

		return (
			<div className="resize-trigger"
				onMouseDown={this.onMouseDown}
				onMouseUp={this.onMouseUp}
			>
				<style jsx>{ styles }</style>
			</div>
		)
	}
}

export default ResizeTrigger;
