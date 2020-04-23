import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const Pizzas = props => {
	const { title, image, description } = props;
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<div>
			<div className='col-sm-6 col-md-4'>
				<div className='thumbnail text-center'>
					<img src={image} alt='No File' className='img-square' />
					<div className='caption'>
						<h3>{title}</h3>
						<p>{description}</p>
						<div>
							<Dropdown isOpen={dropdownOpen} toggle={toggle}>
								<DropdownToggle caret>Select Size & Type</DropdownToggle>
								<DropdownMenu>
									<div>
										<DropdownItem onClick={value => value.target.innerText}>
											Small Pan
										</DropdownItem>
									</div>
									<div>
										<DropdownItem>Regular Pan</DropdownItem>
									</div>
									<div>
										<DropdownItem>Large Pan</DropdownItem>
									</div>
									<div>
										<DropdownItem>Xtra Large Pan</DropdownItem>
									</div>
									<div>
										<DropdownItem>Jumbo Pan</DropdownItem>
									</div>
								</DropdownMenu>
							</Dropdown>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Pizzas;
