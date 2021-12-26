

import React, { Component } from 'react'

class SocialButtons extends Component {
    state = {
        value: true,
    }
    render() {
        const { value } = this.state
        return (
            <div className="flex flex-row justify-center items-center h-screen text-center bg-cover bg-[url('https://assets.ccbp.in/frontend/react-js/social-buttons-bg.png')]">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl font-bold text-white">Social Buttons</h1>
                    <div className="flex flex-row justify-center items-center text-white">
                        <button className="bg-yellow-500 hover:bg-yellow-600 py-2 px-6 rounded m-2 font-medium shadow">Like</button>
                        <button className="bg-gray-500 hover:bg-gray-600 py-2 px-6 rounded m-2 font-medium shadow">Comment</button>
                        <button className="bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded m-2 font-medium shadow">Share</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default SocialButtons
