import React from 'react';
import { cn } from '../../lib/utils';
import { useInView } from 'motion/react';
import { AspectRatio } from './aspect-ratio';

interface AnimatedImageProps {
	alt: string;
	src: string;
	className?: string;
	placeholder?: string;
	ratio: number;
}

const AnimatedImage: React.FC<AnimatedImageProps> = ({ alt, src, ratio, placeholder }) => {
	const ref = React.useRef(null);
	const isInView = useInView(ref, { once: true });
	const [isLoading, setIsLoading] = React.useState(true);

	const [imgSrc, setImgSrc] = React.useState(src);

	const handleError = () => {
		if (placeholder) {
			setImgSrc(placeholder);
		}
	};

	return (
		<AspectRatio
			ref={ref}
			ratio={ratio}
			className="bg-accent relative size-full rounded-lg border overflow-hidden"
		>
			<img
				alt={alt}
				src={imgSrc}
				className={cn(
					'size-full rounded-lg object-cover opacity-0 transition-all duration-1000 ease-in-out',
					{
						'opacity-100': isInView && !isLoading,
					},
				)}
				onLoad={() => setIsLoading(false)}
				loading="lazy"
				onError={handleError}
			/>
		</AspectRatio>
	);
}

export function ImageGallery() {
    // Fill with Unsplash barber imagery for "Vintage Barber" context
    const images = [
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80",
        "https://images.unsplash.com/photo-1599351431247-f10b218c6381?w=800&q=80",
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80",
        "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=800&q=80",
        "https://images.unsplash.com/photo-1622286332616-b7ff700845ea?w=800&q=80",
        "https://images.unsplash.com/photo-1532710093739-9470acff878f?w=800&q=80",
        "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&q=80",
        "https://images.unsplash.com/photo-1512690118294-7043896655c6?w=800&q=80",
        "https://images.unsplash.com/photo-1593702295094-04f3db25816d?w=800&q=80"
    ];

	return (
		<div className="relative flex w-full flex-col items-center justify-center py-10 px-4">
			<div className="mx-auto grid w-full max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
				
				{[0, 1, 2].map((col) => (
					<div key={col} className="grid gap-6">
						{[0, 1, 2].map((index) => {
							const isPortrait = (col + index) % 2 === 0;
							const ratio = isPortrait ? 9 / 16 : 16 / 9;
                            const imageIndex = (col * 3 + index) % images.length;

							return (
								<AnimatedImage
									key={`${col}-${index}`}
									alt={`Vintage Barber Exhibit ${col}-${index}`}
									src={images[imageIndex]}
									ratio={ratio}
									placeholder="https://via.placeholder.com/800"
								/>
							);
						})}
					</div>
				))}
			</div>
		</div>
	);
}
