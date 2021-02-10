import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Editor from './Editor.js'
import Preview from './Preview.js'
import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input:''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState( state => ({
      input: e.target.value
    }))
  }

  render() {
    return (
      <Container className="text-center">

        <Row className="mb-5 pt-3">
          <Col>
            <header className="App-header">
              <h1>Markdown Editor</h1>
            </header>
          </Col>
        </Row>
        <Row xs={1} md={2}>
          <Col className='mt-3'>
            <Editor className='border' text={this.state.input} changeFunction={this.handleChange} />
          </Col>
          <Col className='mt-3'>
            <Preview className='Preview' text={this.state.input}/>
          </Col>
        </Row>
      </Container>
    );
  }
  
}

export default App;
