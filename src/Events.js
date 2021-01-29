import React from 'react'

class Event extends React.Component {
    render() {
        return (
            <div className="events">
                <h1>Events For You</h1>
                <div className="border"></div>
                <div className="card-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        )
    }
}