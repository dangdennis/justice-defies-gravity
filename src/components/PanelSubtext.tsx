'use client'

import { Switch } from '@headlessui/react';
import { useState } from 'react';

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function PanelSubtext(props: { text: string }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className='w-full'>
      <Switch
        checked={visible}
        onChange={setVisible}
        className={classNames(
          visible ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2'
        )}
      >
        <span className="sr-only">Open panel subtext</span>
        <span
          aria-hidden="true"
          className={classNames(
            visible ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )} />
      </Switch>
      {visible && <p className="text-gray-400">{props.text}</p>}
    </div>
  );
}
