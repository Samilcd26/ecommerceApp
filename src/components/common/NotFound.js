import React, { Component } from 'react'
import '../style/404.css'

export default class NotFound extends Component {
    render() {
        return (
            <div>
                <div class="site">
                    <div class="sketch">
                        <div class="bee-sketch red"></div>
                        <div class="bee-sketch blue"></div>
                    </div>

                    <h1>404:
                        <small>Sayfa Bulunamadı !!!</small></h1>
                </div>
            </div>
        )
    }
}
