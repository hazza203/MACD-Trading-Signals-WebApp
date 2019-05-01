import React from 'react'
import './Nav.css'
import NavBar from './NavBar/NavBar.js'
import Header from './Header/Header.js'

class Nav extends React.Component {

	 static defaultProps = {
    headerHeight: 200,
    fadeInDistance: 80,
  };

  constructor(props) {
    super(props);
    this.state = { 
    	navOpacity: 0,
    	background: 'var(--secondary-background)',
      themeToggle: true
    };
    this.updateNavOpacity = this.updateNavOpacity.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.updateNavOpacity);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateNavOpacity);
  }

  handleChange = (event) => {
    if(event.target.checked){
      this.setState({themeToggle: true})
      document.documentElement.setAttribute("data-theme", 'dark');
    } else {
      this.setState({themeToggle: false})
      document.documentElement.setAttribute("data-theme", 'light');
    }
    
  }

	updateNavOpacity() {
    const navbarHeight = 74.52; // Bootstrap default
    const { headerHeight, fadeInDistance } = this.props;
    const endFade = headerHeight - navbarHeight + 10;
    const startFade = endFade - fadeInDistance;
    const scrolly = window.scrollY;

    if (scrolly < startFade) {
      if (this.state.opacity === 0) return;
      this.setState({ navOpacity: 0 })
      return;
    }

    if (scrolly > endFade) {
      if (this.state.opacity === 1) return;
      this.setState({ navOpacity: 1 })
     	this.setState({ background: 'var(--border-gradient)'})
      return;
    } else {
    	this.setState({ background: 'var(--secondary-background)' })
    }

    const pxPastStartFade = scrolly - startFade;
    const navOpacity = pxPastStartFade / (endFade - startFade);
    this.setState({ navOpacity });
  }

	render() {
		return (
			<div>
				<NavBar opacity={ this.state.navOpacity } background={ this.state.background } themeToggle={this.state.themeToggle} handleChange={this.handleChange}/>
        <Header height={ this.props.headerHeight } themeToggle={this.state.themeToggle}  handleChange={this.handleChange}/>
			</div>
		)
	}
	
}

export default Nav