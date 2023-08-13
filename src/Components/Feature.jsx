import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Easy Sharing",
    description:
      "Share your surplus food and unused items with those in need. Making a positive impact has never been easier!",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Secure Transactions",
    description:
      "Rest assured that your transactions are secure and protected. Your safety and privacy are our top priorities.",
    icon: LockClosedIcon,
  },
  {
    name: "Effortless Donations",
    description:
      "Make a difference with simple and efficient donation queues. Your contributions create a ripple of positive change.",
    icon: ArrowPathIcon,
  },
  {
    name: "User Privacy",
    description:
      "We prioritize the security of your data and personal information. Your identity and privacy are always protected.",
    icon: FingerPrintIcon,
  },
];

export default function FeaturesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Join SoulShare
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Empowering 
          
           <span className="px-2 text-white bg-blue-600 rounded dark:bg-blue-500 ml-2">
           Positive Change
           </span>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Make a difference by sharing your surplus resources with those who
            need them. SoulShare offers you a seamless platform to contribute
            and create meaningful impact.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
