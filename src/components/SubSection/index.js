import React from "react";
import {
  Button,
  Input,
  InputAdd,
  SubSectionCreate,
  SubSectionWrapper,
} from "./styles";

const SubSection = ({ title, readOnly, subsection, isAdmin }) => {
  const renderSubSection = () => {
    if (!!subsection?.length) {
      return subsection?.map((child, i) => (
        <SubSection
          key={i}
          title={child?.title}
          readOnly={readOnly}
          isAdmin={isAdmin}
          subsection={child?.subsection}
        />
      ));
    }
    return null;
  };

  return (
    <SubSectionWrapper>
      <Input defaultValue={title} readOnly={readOnly} />
      {renderSubSection()}
      {isAdmin && (
        <SubSectionCreate>
          <InputAdd />
          <Button>Add</Button>
        </SubSectionCreate>
      )}
    </SubSectionWrapper>
  );
};

export default SubSection;
