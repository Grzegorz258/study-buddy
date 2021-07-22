import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { Wrapper, GroupsNav, StyledLink } from './DashBoard.styles';
import { useStudents } from 'hooks/useStudents';
import { Title } from 'components/atoms/Title/Title';

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const { getGroups } = useStudents();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  if (!id && groups.length > 0) return <Redirect to={`/group/${groups[0]}`} />;

  return (
    <Wrapper>
      <GroupsNav>
        <Title as="h2">Group </Title>
        {groups.map((group) => (
          <StyledLink key={group} to={`/group/${group}`} group={group}>
            {group}
          </StyledLink>
        ))}
      </GroupsNav>
      <StudentsList />
    </Wrapper>
  );
};

export default Dashboard;
