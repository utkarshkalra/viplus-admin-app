import React from "react";
import Input from "../../../components/UI/Input";
import Modal from "../../../components/UI/Modal";
import { Row, Col } from "react-bootstrap";

const UpdateCategoriesModal = (props) => {
  const {
    show,
    handleClose,
    modalTitle,
    size,
    checkedArray,
    handleCategoryInput,
    categoryList,
    onSubmit,
  } = props;

  return (
    <Modal
      show={show}
      handleClose={handleClose}
      onSubmit={onSubmit}
      modalTitle={modalTitle}
      size={size}
    >
      {!checkedArray.length > 0 ? (
        <h5>please select atleast one category</h5>
      ) : (
        <>
          <h6>Checked Categories</h6>
          {checkedArray.length > 0 &&
            checkedArray.map((item, index) => (
              <Row key={index}>
                <Col>
                  <Input
                    value={item.name}
                    placeholder={`Category Name`}
                    onChange={(e) =>
                      handleCategoryInput(
                        "name",
                        e.target.value,
                        index,
                        "checked"
                      )
                    }
                  />
                </Col>
                <Col>
                  <select
                    className="form-control"
                    value={item.parentId}
                    onChange={(e) =>
                      handleCategoryInput(
                        "parentId",
                        e.target.value,
                        index,
                        "checked"
                      )
                    }
                  >
                    <option>select category</option>
                    {categoryList.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </Col>
              </Row>
            ))}
        </>
      )}
    </Modal>
  );
};

export default UpdateCategoriesModal;
