import { AboutHero } from '../components/AboutHero';
import { Mission } from '../components/Mission';
import { AboutMission } from '../components/AboutMission';

export function AboutPage() {
  return (
    <div className="pt-28">
      <AboutHero />
      <Mission />
      <AboutMission />
    </div>
  );
}