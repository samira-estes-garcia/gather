import React from 'react'

const Hero = () => {
    return (
        <div className="hero">
            <h1>We Make Great Friendships Happen</h1>
            <form>
                <input type="text" placeholder="Search Events" />
                <input type="text" placeholder="City or Location" />
                <input type="date" placeholder="All Dates" />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Hero