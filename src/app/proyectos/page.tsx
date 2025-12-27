import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectsHero from '@/components/projects/ProjectsHero';
import VideoCategories from '@/components/projects/VideoCategories';
import MetricsTimeline from '@/components/projects/MetricsTimeline';
import StorytellingSection from '@/components/projects/StorytellingSection';
import MotivationalSection from '@/components/projects/MotivationalSection';

export default function ProyectosPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <ProjectsHero />
      <VideoCategories />
      <MetricsTimeline />
      <StorytellingSection />
      <MotivationalSection />
      <Footer />
    </main>
  );
}
