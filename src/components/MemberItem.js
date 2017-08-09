import React from 'react'

import './MemberItem.css'

const MemberItem = (props) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3 _p-t-100">
        <img src={`/cover/${props.id}.jpg`} alt="Image" />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={`/avatar/${props.id}.jpg`} alt="Image" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{props.nickname}</p>
          <p className="subtitle is-6">{props.name}</p>
        </div>
      </div>

      <div className="content">
        <p className="item-description">
          <i className="fa fa-birthday-cake _m-r-15" aria-hidden="true"></i> {props.dob}
        </p>
        <p className="item-description">
          <i className="fa fa-smile-o _m-r-15" aria-hidden="true"></i> {props.hobby}
        </p>
        <p className="item-description">
          <i className="fa fa-star-o _m-r-15" aria-hidden="true"></i> {props.like.join(', ')}
        </p>
      </div>
    </div>
    <footer className="card-footer">
      <p className="card-footer-item">
        <a href={`https://www.instagram.com/${props.igAcc}`} target="blank">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>        
      </p>
      <p className="card-footer-item">
        <a href={`http://www.facebook.com/${props.fbAcc}`} target="blank">
          <i className="fa fa-facebook-official" aria-hidden="true"></i>
        </a>
      </p>
      <p className="card-footer-item">
        <a href={`http://www.facebook.com/${props.fbAcc}`} target="blank">
          <i className="fa fa-comment-o" aria-hidden="true"></i>
        </a>
      </p>
    </footer>
  </div>
)

export default MemberItem

