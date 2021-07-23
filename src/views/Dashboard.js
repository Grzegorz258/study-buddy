import React, { useEffect, useState } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { Wrapper, GroupsNav, StyledLink } from './DashBoard.styles';
import { useStudents } from 'hooks/useStudents';
import { Title } from 'components/atoms/Title/Title';
import Modal from 'components/organisms/Modal/Modal';
import useModal from 'components/organisms/Modal/useModal';
import StudentDetails from 'components/organisms/StudentsDetails/StudentsDetails';

const mockStudent = {
  id: '1',
  name: 'Adam Romański',
  attendance: '39%',
  average: '2.3',
  group: 'A',
  course: 'Business Philosophy',
  grades: [
    {
      subject: 'Business Philosophy',
      average: '3.3',
    },
    {
      subject: 'Marketing',
      average: '4.7',
    },
    {
      subject: 'Modern Economy',
      average: '2.5',
    },
  ],
};

const Dashboard = () => {
  const [groups, setGroups] = useState([]);
  const [currentStudent, setCurrentStudent] = useState([]);
  const { getGroups, getStudentById } = useStudents();
  const { id } = useParams();
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    (async () => {
      const groups = await getGroups();
      setGroups(groups);
    })();
  }, [getGroups]);

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

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
      <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <StudentDetails student={mockStudent} />
      </Modal>
    </Wrapper>
  );
};

export default Dashboard;
