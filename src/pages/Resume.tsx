import styled from '@emotion/styled';
import Tag from '../components/Tag';


const Title = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: #212529;
  margin-bottom: 2rem;
  word-break: keep-all;
`;

const Text = styled.p`
  width: 700px;
  font-size: 1.5rem;
`;

const DetailText = styled.p`
  font-size: 1rem;
  padding-left: 20px;
`;

const InfoBox = styled.div`
  padding-bottom: 20px;
`;

const LinkText = styled.a`
`;

const Resume = () => {
  return <>
    <Title>Experiences</Title>
    <InfoBox>
      <Text>학부 연구생 - ISoft Lab at CNU</Text>
      <DetailText>- Dec.2022 ~ Current</DetailText>
      <DetailText>- (at) ISoftLab of CNU</DetailText>
      <Tag>#자연어 처리</Tag>
      <Tag>#PyTorch</Tag>
      <Tag>#PyTorch Lightning</Tag>
    </InfoBox>
    <InfoBox>
      <Text>Flutter 모바일 앱 개발자</Text>
      <DetailText>- May.2022 ~ Current</DetailText>
      <DetailText>- (at) (주)제4의공간</DetailText>
      <Tag>#Flutter</Tag>
      <Tag>#riverpod</Tag>
      <Tag>#Firebase</Tag>
      <Tag>#Typescript</Tag>
    </InfoBox>

    <Title>Projects</Title>
    <InfoBox>
      <Text>"기억하다" 앱 PlayStore, AppStore 배포</Text>
      <DetailText>- <LinkText href='https://github.com/Warm-minji/what_was_it_app' target='_blank'>GitHub repo</LinkText></DetailText>
      <DetailText>- <LinkText href='https://apps.apple.com/kr/app/%EA%B8%B0%EC%96%B5%ED%95%98%EB%8B%A4/id1641054781' target='_blank'>AppStore</LinkText></DetailText>
      <DetailText>- <LinkText href='https://play.google.com/store/apps/details?id=com.sudwlsdks.what_was_it_app' target='_blank'>PlayStore</LinkText></DetailText>
      <Tag>#Flutter</Tag>
    </InfoBox>
    <InfoBox>
      <Text>제주 방언 번역기 프로젝트</Text>
      <DetailText>- <LinkText href='https://github.com/hi-jin/jeju-translator' target='_blank'>GitHub repo</LinkText></DetailText>
      <Tag>PyTorch</Tag>
      <Tag>PyTorch Lightning</Tag>
      <Tag>Flask</Tag>
    </InfoBox>
  </>;
};

export default Resume;
