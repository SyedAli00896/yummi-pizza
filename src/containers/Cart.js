import React, { Component } from 'react';

import { Link } from 'react-router-dom';
export default class Cart extends Component {
	render() {
		return (
			<div class='container'>
				<div class='row'>
					<div class='col-sm-12 col-md-10 col-md-offset-1'>
						<table class='table table-hover'>
							<thead>
								<tr>
									<th>Product</th>
									<th>Quantity</th>
									<th class='text-center'>Price</th>
									<th class='text-center'>Total</th>
									<th> </th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class='col-md-6'>
										<div class='media'>
											<a class='thumbnail pull-left' href='#'>
												<img
													class='media-object'
													src='http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png'
													style={{ width: 72, height: 72 }}
												/>
											</a>
											<div class='media-body'>
												<h4 class='media-heading'>
													<a href='#'>Product name</a>
												</h4>
											</div>
										</div>
									</td>
									<td class='col-md-1' style={{ textAlign: 'center' }}>
										<input
											type='email'
											class='form-control'
											id='exampleInputEmail1'
											value='2'
										/>
									</td>
									<td class='col-md-1 text-center'>
										<strong>$4.99</strong>
									</td>
									<td class='col-md-1 text-center'>
										<strong>$9.98</strong>
									</td>
									<td class='col-md-1'>
										<button type='button' class='btn btn-danger'>
											<span class='glyphicon glyphicon-remove'></span> Remove
										</button>
									</td>
								</tr>
								<tr>
									<td>   </td>
									<td>   </td>
									<td>   </td>
									<td>
										<h5>Subtotal</h5>
									</td>
									<td class='text-right'>
										<h5>
											<strong>$24.59</strong>
										</h5>
									</td>
								</tr>
								<tr>
									<td>   </td>
									<td>   </td>
									<td>   </td>
									<td>
										<h5>Estimated shipping</h5>
									</td>
									<td class='text-right'>
										<h5>
											<strong>$6.94</strong>
										</h5>
									</td>
								</tr>
								<tr>
									<td>   </td>
									<td>   </td>
									<td>   </td>
									<td>
										<h3>Total</h3>
									</td>
									<td class='text-right'>
										<h3>
											<strong>$31.53</strong>
										</h3>
									</td>
								</tr>
								<tr>
									<td>   </td>
									<td>   </td>
									<td>   </td>
									<td>
										<button type='button' class='btn btn-default'>
											<Link to='./'>
												<span class='glyphicon glyphicon-shopping-cart'></span> Continue
												Shopping
											</Link>
										</button>
									</td>
									<td>
										<button type='button' class='btn btn-success'>
											Checkout <span class='glyphicon glyphicon-play'></span>
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		);
	}
}
