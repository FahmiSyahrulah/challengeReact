import React, { Component } from 'react';
import './Sidebar.css';


class Sidebar extends Component {
  render() {
    return (
        <div>
            <span>Berita terhangat</span>
        
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Inter kalahkan SPAL</a>
            <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Ibukota akan dipindahkan ke Mojokerto</a>
            <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Indonesia tuan rumah Piala Eropa</a>
            <a class="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">RUU permusikkan dibatalkan</a>
        </div>
        </div>
    );
  }
}

export default Sidebar  ;  