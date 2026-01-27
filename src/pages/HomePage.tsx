import { HeroCarousel } from '../components/HeroCarousel';
import { TrustBadges } from '../components/TrustBadges';
import { FollowUs } from '../components/FollowUs';

export function HomePage() {
  return (
    <>
      <HeroCarousel />
      <TrustBadges />
      <FollowUs />
    </>
  );
}