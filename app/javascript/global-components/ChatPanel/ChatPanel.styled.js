import styled from "styled-components";

const StyledChatPanel = styled.div`
  flex-grow: 1;

  position: relative;

  padding-top: 10px;
  padding-bottom: 100px;

  border-top: 1px solid black;
  border-bottom: 1px solid black;

  .chat-name {
    text-decoration: underline;
    margin-bottom: 10px;
  }

  .message {
    text-align: left;
    padding: 10px;
    margin: 3px;
    border-radius: 6px;
    background-color: lightgray;

    .author {
      font-size: 10px;
    }
  }
`;

export default StyledChatPanel;
