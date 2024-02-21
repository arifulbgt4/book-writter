import React, { useMemo, useState } from "react";
import {
  Button,
  Input,
  InputAdd,
  SubSectionCreate,
  SubSectionWrapper,
} from "./styles";

const SubSection = ({
  title,
  readOnly,
  subsection,
  isAdmin,
  elements,
  onClick,
  onChange,
}) => {
  const [value, setValue] = useState("");

  const renderSubSection = () => {
    if (!!subsection?.length) {
      return subsection?.map((child, i) => (
        <SubSection
          key={i}
          title={child?.title}
          readOnly={readOnly}
          elements={`${elements},${child?.id}`}
          isAdmin={isAdmin}
          onChange={onChange}
          onClick={onClick}
          subsection={child?.subsection}
        />
      ));
    }
    return null;
  };

  const element = useMemo(() => elements?.split(","), [elements]);

  return (
    <SubSectionWrapper>
      <Input
        value={title}
        onChange={(e) => onChange(element, e.target.value)}
        readOnly={readOnly}
      />
      {renderSubSection()}
      {isAdmin && (
        <SubSectionCreate>
          <InputAdd
            value={value}
            onChange={(e) => setValue(e?.target?.value)}
          />
          <Button
            onClick={() => {
              onClick(element, value);
              setValue("");
            }}
          >
            Add
          </Button>
        </SubSectionCreate>
      )}
    </SubSectionWrapper>
  );
};

export default SubSection;
