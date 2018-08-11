import React, { Component } from 'react';


class Productitem extends Component {
    render() {
        var {product,index}=this.props;
        var status = product.status ? 'còn hàng':'hết hàng';
        var statusClass = product.status ? 'warning':'default';
        return (
            <tbody>
                <tr>
                    <td>{index+1}</td>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>

                        <span className={`label label-${statusClass}`}>{status}</span>

                    </td>
                    <td>

                        <button type="button" className="btn btn-success mr-r">Sửa</button>
                        <button type="button" className="btn btn-danger">xóa</button>

                    </td>
                </tr>
            </tbody>
        );
    }
}

export default Productitem;
