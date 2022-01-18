import Head from 'next/head';
import { Text, Flex } from '@chakra-ui/react';

export default function benefit() {
	return (
		<div className='container'>
			<Head>
				<title>Benefits of Coffee</title>
			</Head>

			<Flex direction='column' paddingY='1.5rem'>
				<Text fontWeight='bold' fontSize='xl' paddingBottom='1rem'>
					Benefits of Coffee
				</Text>
				<Text lineHeight='1.5rem'>
					The biggest benefit and the most known fact about coffee is that, no
					matter how sleepy you are, it will ensure you jerk up to alertness. If
					you are a black coffee lover, you just earned yourself some perks. An
					important benefit of coffee, especially for black coffee lovers, is
					that coffee increases your metabolism at least by 11%. Because of this
					reason, it also helps you in losing weight. In fact, the latest trend
					called “Green Coffee” has hit the market which helps you lose weight
					faster. It is a similar concept to Green Tea, but it has an acquired
					taste. Well, not that Green Tea is any tastier. The green coffee beans
					need to be ground without roasting them. Though it is claimed to have
					a lesser amount of caffeine, it still works the same way. Contrary to
					popular belief, coffee helps you stay away from many chronic diseases
					like type 2 Diabetes, Alzheimer’s, Dementia, Parkinson’s and a few
					other neural diseases. All these, if you are a black coffee drinker.
					Having coffee helps you with a sharper mind and attentiveness. You
					would hardly miss anything. It increases your body temperatures,
					ensuring you keep warm in the cold days.
				</Text>
			</Flex>
		</div>
	);
}
