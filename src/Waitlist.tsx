import { Accessor, Component } from 'solid-js';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import { validator } from '@felte/validator-zod';
import { createForm } from '@felte/solid';
import { Modal } from '@suid/material';
import Close from './static/icons/close.svg';

const WaitlistSchema = z.object({
  email: z.string().nonempty('Please enter a email address').email('Please enter a valid email address'),
  name: z.string().nonempty('Please enter a name'),
  referal: z.string().optional(),
});

type Waitlist = z.infer<typeof WaitlistSchema>;

const supabase = createClient('https://cpbbojojpwdrqtbdmhaz.supabase.co', import.meta.env.VITE_SUPERBASE_ANNON);

interface WaitlistProps {
  isOpen: Accessor<boolean>;
  onClose: () => void;
}

export const Waitlist: Component<WaitlistProps> = (props) => {
  const { form, errors } = createForm<Waitlist>({
    extend: validator({ schema: WaitlistSchema }),
    onSubmit: (values) => {
      supabase
        .from('waitlist')
        .insert(values)
        .then(() => {
          props.onClose();
        });
    },
  });
  return (
    <Modal open={props.isOpen()} onClose={props.onClose}>
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-[#1C1E2E] p-7 md:w-[35rem] flex flex-col gap-4 w-full">
        <div class="flex justify-between">
          <h1 class="text-xl font-semibold section-title">Join the waitlist</h1>
          <button
            class="text-white rounded-full grid place-items-center p-1.5 hover:bg-purple-500 bg-[#373A56]"
            onClick={props.onClose}
            type="button"
          >
            <Close />
          </button>
        </div>
        <form class="flex flex-col gap-6 text-sm text-white" ref={form}>
          <div class="flex flex-col gap-1.5">
            <label for="email">Email</label>
            <input name="name" type="text" placeholder="Enter your name" class="rounded-lg py-2.5 px-3.5 bg-[#292C42] placeholder:text-[#667085]" />
            {errors()?.name?.length && <p class="px-1 text-red-500">{errors()?.name[0]}</p>}
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="name">Name</label>
            <input name="email" type="email" placeholder="you@company.com" class="rounded-lg py-2.5 px-3.5 bg-[#292C42] placeholder:text-[#667085]" />
            {errors()?.email?.length && <p class="px-1 text-red-500">{errors()?.email[0]}</p>}
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="referal">Referal</label>
            <input
              name="referal"
              type="text"
              placeholder="Word of mouth, Google search etc"
              class="rounded-lg py-2.5 px-3.5 bg-[#292C42] placeholder:text-[#667085]"
            />
            {errors()?.referal?.length && <p class="px-1 text-red-500">{errors()?.referal[0]}</p>}
          </div>
          <button class="bg-white text-black-700 rounded-full px-4 py-1.5 hover:bg-purple-500 hover:text-white text-base w-fit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};
