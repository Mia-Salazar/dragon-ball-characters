import { useState } from 'react';

import type { Character } from '../../../domain/character';
import './Item.css'

const Item = ({ description, image, name, ki }: Character) => {
	const [isOpen, setIsOpen] = useState(false)

	const handleClick = () => {
		setIsOpen(isOpen => !isOpen)
	}

	return (
		<li className={isOpen ? 'item-container selected' : 'item-container'} aria-expanded={isOpen ? true : false}>
			<button className="item-button" onClick={handleClick} aria-label="Open dropdown" aria-controls="dropdown">
				<h3 className={isOpen ? 'hidden' : 'item-title'}>{name} </h3>
				<p className="item-subtitle">
					<span className={isOpen ? 'hidden' : 'item-ki'}>{ki}</span> 
					<i aria-hidden="true" className={ isOpen ? 'arrow up' : 'arrow'}></i>
				</p>  
			</button>
			{isOpen && 
				(
					<div id="dropdown">
						<figure className="item-image-wrapper">
							<img alt="" src={image} className="image" />
						</figure>
						<h3 className="item-title-dropdown">{name} <span>{ki}</span></h3>
						<p className="item-description">{description}</p>
					</div>
				)
			}
		</li>
	);
};

export default Item;