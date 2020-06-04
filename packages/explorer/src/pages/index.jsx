import React, { useState } from 'react';
import styled from 'styled-components';
import { TaskBar, List } from '@react95/core';
import { graphql } from 'gatsby';

import { Layout, File } from '../components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: calc(100vh - 40px);
  align-content: flex-start;
  padding-top: 20px;
`;

const IndexPage = ({ data }) => {
  const [openedModals, setOpenedModals] = useState([]);

  const {
    allMdx: { edges },
  } = data;
  const filteredTags = [
    ...new Set([].concat(...edges.map(edge => edge.node.fields.tags))),
  ];

  const componentsByTag = tag =>
    edges.filter(edge => edge.node.fields.tags.includes(tag));

  return (
    <Layout>
      <Wrapper>
        {filteredTags.map(tag => (
          <File
            icon="folder"
            name={tag}
            key={tag}
            onDoubleClick={() =>
              setOpenedModals(previousModals => [...previousModals, tag])
            }
          />
        ))}
      </Wrapper>
      <TaskBar
        list={
          <List>
            <List.Item icon="folder_exe2">
              <List>
                {filteredTags.map(tag => (
                  <List.Item icon="folder" key={tag}>
                    <List>
                      {componentsByTag(tag).map(component => (
                        <List.Item
                          icon={component.node.fields.icon}
                          key={component.node.fields.title}
                        >
                          {component.node.fields.title}
                        </List.Item>
                      ))}
                    </List>
                    {tag}
                  </List.Item>
                ))}
              </List>
              Components
            </List.Item>
            <List.Divider />
            <List.Item icon="computer_3">Shut Down...</List.Item>
          </List>
        }
      />
    </Layout>
  );
};

export const query = graphql`
  query HomePageQuery {
    allMdx {
      edges {
        node {
          id
          fields {
            title
            icon
            tags
          }
        }
      }
    }
  }
`;

export default IndexPage;
