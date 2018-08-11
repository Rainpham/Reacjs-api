import React, { Component } from 'react';


class ProductAction extends Component {
    render() {
        return (
            <div className="container">

                <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">

                    <form>


                        <div className="form-group">
                            <label >Tên sản phẩm</label>
                            <input type="text" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label >Giá</label>
                            <input type="number" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label >Trạng Thái</label>
                        </div>

                        <div className="checkbox">
                            <label>
                                <input type="checkbox" />
                                Còn hàng
                        </label>
                        </div>


                        <button type="submit" className="btn btn-primary">Lưu Lại</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ProductAction;
