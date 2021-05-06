import { useRouter } from 'next/router';
import { trainings } from '@shared/data/trainings';

const useTrainings = () => {
    const router = useRouter();
    const { landingId } = router.query;
    const training: Record<string, any> | undefined =
        trainings?.[landingId as string];

    console.log('router', router);

    return {
        training,
    };
};

export default useTrainings;
