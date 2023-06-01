import { Accessor, Component } from 'solid-js';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';
import { validator } from '@felte/validator-zod';
import { createForm } from '@felte/solid';
import { Modal } from '@suid/material';
import Close from './static/icons/close.svg';
import toast from 'solid-toast';

const ContactUsSchema = z.object({
  email: z.string().nonempty('Please enter a email address').email('Please enter a valid email address'),
  name: z.string().nonempty('Please enter a name'),
  message: z.string().nonempty('Please enter a message'),
});

type ContactUs = z.infer<typeof ContactUsSchema>;

const supabase = createClient('https://cpbbojojpwdrqtbdmhaz.supabase.co', import.meta.env.VITE_SUPERBASE_ANNON);

interface ContactUsProps {
  isOpen: Accessor<boolean>;
  onClose: () => void;
}

export const ContactUs: Component<ContactUsProps> = (props) => {
  const { form, errors } = createForm<ContactUs>({
    extend: validator({ schema: ContactUsSchema }),
    onSubmit: (values) => {
      props.onClose();
      toast.promise(
        new Promise((resolve, reject) =>
          supabase
            .from('contact_us')
            .insert(values)
            .then((result) => (result.error ? reject(result.error) : resolve(result)))
        ),
        {
          loading: 'Sending your message...',
          success: 'Your message has been sent!',
          error: 'Something went wrong. Please try again later.',
        }
      );
    },
  });
  return (
    <Modal open={props.isOpen()} onClose={props.onClose}>
      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-[#1C1E2E] p-7 md:w-[35rem] flex flex-col gap-4 w-full">
        <div class="flex justify-between">
          <h1 class="text-xl font-semibold section-title">Contact Us</h1>
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
            <label for="name">Name</label>
            <input name="name" type="text" placeholder="Enter your name" class="rounded-lg py-2.5 px-3.5 bg-[#292C42] placeholder:text-[#667085]" />
            {errors()?.name?.length && <p class="px-1 text-red-500">{errors()?.name[0]}</p>}
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="email">Email</label>
            <input name="email" type="email" placeholder="you@company.com" class="rounded-lg py-2.5 px-3.5 bg-[#292C42] placeholder:text-[#667085]" />
            {errors()?.email?.length && <p class="px-1 text-red-500">{errors()?.email[0]}</p>}
          </div>
          <div class="flex flex-col gap-1.5">
            <label for="referal">Referal</label>
            <textarea
              name="referal"
              placeholder="Word of mouth, Google search etc"
              class="rounded-lg py-2.5 px-3.5 bg-[#292C42] placeholder:text-[#667085]"
              rows={3}
            />
            {errors()?.message?.length && <p class="px-1 text-red-500">{errors()?.message[0]}</p>}
          </div>
          <button class="bg-white text-black-700 rounded-full px-4 py-1.5 hover:bg-purple-500 hover:text-white text-base w-fit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};
