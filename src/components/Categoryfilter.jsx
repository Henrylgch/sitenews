import React, {Component} from 'react'


class Categoryfilter extends Component {
    state = {
        category: 'general'
    }

    handleChange = (e) => {
        this.setState({
            category: e.target.value
        })

        this.props.getNews(e.target.value)
    }

    render() {
        return (
            <div className="container back-sec rounded py-3 mt-3">
                <form className="form-group row col-md-5 mx-auto">
                    <h5 className="mx-auto" >Selecciona una categoria</h5>
                    <select className="form-control" value={this.state.category} onChange={this.handleChange} >
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="business">Business</option>
                        <option value="general">General</option>
                        <option value="health">Health</option>
                        <option value="science">Science</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Categoryfilter