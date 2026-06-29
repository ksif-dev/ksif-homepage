import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { TeamPage } from '@/components/TeamPage';

interface Section {
  title: string;
  body: string;
}

interface TeamData {
  title: string;
  lead: string;
  sections: Section[];
}

export const TeamRoute = () => {
  const { slug } = useParams<{ slug: string }>();
  const [data, setData] = useState<TeamData | null>(null);

  useEffect(() => {
    if (!slug) return;
    setData(null);
    fetch(`/data/team-${slug}.json`)
      .then((r) => r.json() as Promise<TeamData>)
      .then(setData);
  }, [slug]);

  if (!data) return null;

  return (
    <TeamPage title={data.title} lead={data.lead} sections={data.sections} />
  );
};
