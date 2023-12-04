import React from 'react';
import { Medal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import LocalFont from 'next/font/local';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const headingFont = LocalFont({
	src: '../../public/fonts/font.woff2'
});

const textFont = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const MarketingPage = () => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className={cn('flex flex-col items-center justify-center', headingFont.className)}>
				<div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
					<Medal className="h-6 w-6 mr-2" />
					NO 1 TASK MANAGMENT
				</div>
				<h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">Taskify helps team move</h1>
				<div className="text-3xl md:text-6xl text-white px-4 py-2 rounded-md pb-4 bg-gradient-to-r from-fuchsia-600 to-pink-600 w-fit">work forward.</div>
			</div>
			<div className={cn("text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto", textFont.className)}>
				Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with
				Taskify.
			</div>
			<Button className="mt-6" size="lg" asChild>
				<Link href="/">Get Taskify for free</Link>
			</Button>
		</div>
	);
};

export default MarketingPage;
