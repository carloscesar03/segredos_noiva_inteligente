/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import Bullets from './components/Bullets';
import ProductExplanation from './components/ProductExplanation';
import WhatYouWillLearn from './components/WhatYouWillLearn';
import PracticalExample from './components/PracticalExample';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import Guarantee from './components/Guarantee';
import Summary from './components/Summary';
import Author from './components/Author';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans antialiased selection:bg-emerald-500 selection:text-white">
      <Hero />
      <Bullets />
      <ProductExplanation />
      <WhatYouWillLearn />
      <PracticalExample />
      <Testimonials />
      <Offer />
      <Guarantee />
      <Summary />
      <Author />
    </div>
  );
}
