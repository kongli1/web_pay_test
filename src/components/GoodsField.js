/**
 * Author：liRenhao
 * Create Date：2016/9/9
 * Modified By：liRenhao
 * Why & What is modified  <修改原因描述>
 * 使用redux-form的FieldArray实现动态添加商品录入框
 */
import React from "react"
import {ListGroup, ListGroupItem, InputGroup, Button} from "react-bootstrap"
import {Field} from "redux-form"
import InputField from "./InputField"

const GoodsField = ({fields}) => (
    <ListGroup>
        {fields.map((item, index) =>
            <ListGroupItem key={index}>
                <Field type="text"
                       name={`${item}.name`}
                       component={InputField}
                       label="商品"
                       placeholder="name">
                </Field>
                {" "}
                <Field type="number"
                       name={`${item}.price`}
                       component={InputField}
                       label="价格"
                       placeholder="price"/>
                {" "}
                <Field type="number"
                       name={`${item}.quantity`}
                       component={InputField}
                       label="数量"
                       placeholder="quantity"/>
                {" "}
                <InputGroup>
                    <Button bsStyle="danger" onClick={() => fields.remove(index)}>删除</Button>
                </InputGroup>
            </ListGroupItem>
        )}
        <div className="btn-group btn-group-justified" role="group">
            <div className="btn-group" role="group">
                <Button onClick={() => fields.push({})}>添加</Button>
            </div>
            <div className="btn-group" role="group">
                <Button bsStyle="primary" type="submit">提交</Button>
            </div>
        </div>
    </ListGroup>
)

export default GoodsField