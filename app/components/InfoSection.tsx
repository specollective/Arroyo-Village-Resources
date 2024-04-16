import Card from '@/app/components/Card';
import CurrentDate from '@/app/components/CurrentDate';
import FeatureHighlight from '@/app/components/FeatureContent';
import { scheduleItems } from '@/constants/infoSection';

const styles = {
  infoSection: 'flex flex-col md:flex-row justify-between gap-6 w-full h-full',
  featureCard: 'basis-2/3',
  scheduleCard: 'flex flex-col p-4',
  currentDateContainer: 'basis-1/3',
  scheduleList: 'space-y-2 mt-2 text-lg font-semibold',
};

export default function InfoSection() {
  return (
    <div className={styles.infoSection}>
      <Card className={styles.featureCard}>
        <FeatureHighlight />
      </Card>
      <Card className={styles.scheduleCard}>
        <div className={styles.currentDateContainer}>
          <CurrentDate />
        </div>
        <div className='w-full py-1'>
          <div className='h-0.5 bg-black mx-auto'></div>
        </div>
        <ul className={styles.scheduleList}>
          {scheduleItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
