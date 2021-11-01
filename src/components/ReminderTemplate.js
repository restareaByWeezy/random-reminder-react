import React from "react";
import styled from "styled-components";

const ReminderTemplateBlock = styled.div`
  width: 512px;
  height: 768px;

  position: relative;
  background: #FAD5A5;
  border-radius: 2rem;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

function ReminderTemplate({ children }) {
  return <ReminderTemplateBlock>{children}</ReminderTemplateBlock>;
}

export default ReminderTemplate;

