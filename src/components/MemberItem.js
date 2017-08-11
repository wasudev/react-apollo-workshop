import React from 'react'
import { Link } from 'react-router-dom'

import LikePanel from './LikePanel'
import './MemberItem.css'

const MemberItem = (props) => (
  <div className="card">
    <div className="card-image">
      <figure className="image is-4by3 _p-t-100">
        <img src={`/cover/${props.id}.jpg`} alt="member cover" />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img src={`/avatar/${props.id}.jpg`} alt="member avatar" />
          </figure>
        </div>
        <div className="media-content">
          <p className="title is-4">{props.nickname}</p>
          <p className="subtitle is-6">{props.name}</p>
        </div>
      </div>

      <div className="content">
        <p className="item-description">
          <i className="fa fa-birthday-cake _m-r-15" aria-hidden="true"></i> {props.dob} ({props.age})
        </p>
        <p className="item-description">
          <i className="fa fa-smile-o _m-r-15" aria-hidden="true"></i> {props.hobby}
        </p>
        <p className="item-description">
          <i className="fa fa-star-o _m-r-15" aria-hidden="true"></i> {props.favorite.join(', ')}
        </p>
        <p>
          <a className="item-description" href={`https://www.instagram.com/${props.igAcc}`} target="blank">
            <i className="fa fa-instagram _m-r-15" aria-hidden="true"></i>
            {props.igAcc}
          </a>        
        </p>
        <p>
          <a className="item-description" href={`http://www.facebook.com/${props.fbAcc}`} target="blank">
            <i className="fa fa-facebook-official _m-r-15" aria-hidden="true"></i>
            {props.fbAcc}
          </a>        
        </p>
      </div>
    </div>
    <footer className="card-footer">
      <p className="card-footer-item">
        <LikePanel ownerId={props.id} />
      </p>
      <p className="card-footer-item">
        <Link to={`/members/${props.id}/comments`} className="item-description">
          <i className="fa fa-comment-o _m-r-15" aria-hidden="true"></i> {props.comments.length}
        </Link>
      </p>
    </footer>
  </div>
)

export default MemberItem

