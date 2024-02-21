import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { AddButton, SectionInput, SectionWrapper, Wrapper } from "./styles";
import SubSection from "../SubSection";

const Section = ({ readOnly, isAdmin }) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const getSections = async () => {
    try {
      const res = await fetch("http://localhost:3001/sections", {
        method: "GET",
      });

      const resData = await res.json();
      setData(resData);
      console.log("res", resData);
    } catch (error) {
      console.error(error);
    }
  };

  const createSection = () => {
    if (value?.length === 0) return;
    const newSection = {
      id: uuidv4(),
      title: value,
      subsection: [],
    };
    setData((prevState) => [...prevState, newSection]);
    setValue("");
  };

  const handleSections = (selector, newTitle, create = false) => {
    const updateSections = [...data];
    let currentSection = updateSections?.find((sec) => sec?.id === selector[0]);
    for (let i = 1; i < selector?.length - 1; i++) {
      currentSection = currentSection?.subsection?.find(
        (sub) => sub?.id === selector[i]
      );
    }

    if (create) {
      currentSection?.subsection?.push({
        id: uuidv4(),
        title: newTitle,
        subsection: [],
      });
      setData(updateSections);
      return;
    }

    const lastId = selector[selector?.length - 1];
    const updateSection = currentSection?.subsection.find(
      (sec) => sec?.id === lastId
    );

    if (updateSection) {
      updateSection.title = newTitle;
      setData(updateSections);
    }
  };

  useEffect(() => {
    getSections();
  }, []);

  return (
    <Wrapper>
      {!!data &&
        data?.map((el, i) => (
          <SectionWrapper key={i}>
            <SubSection
              title={el?.title}
              readOnly={readOnly}
              elements={el?.id}
              isAdmin={isAdmin}
              subsection={el.subsection}
              onChange={(el, v) => handleSections(el, v)}
              onClick={(el, v) => handleSections(el, v, true)}
            />
          </SectionWrapper>
        ))}
      {isAdmin && (
        <div>
          <SectionInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <AddButton onClick={createSection}>Add section</AddButton>
        </div>
      )}
    </Wrapper>
  );
};

export default Section;
