import { Accessor, Component } from 'solid-js';
import { createClient } from '@supabase/supabase-js';
import { Portal } from 'solid-js/web';
import { z } from 'zod';
import { validator } from '@felte/validator-zod';
import { createForm } from '@felte/solid';

const WaitlistSchema = z.object({
  email: z.string().nonempty('Please enter a email address').email('Please enter a valid email address'),
  name: z.string().nonempty('Please enter a name'),
  referal: z.string().optional(),
});

type Waitlist = z.infer<typeof WaitlistSchema>;

const supabase = createClient('https://cpbbojojpwdrqtbdmhaz.supabase.co', process.env.SOLID_APP_SUPERBASE_ANNON);

interface WaitlistProps {
  isOpen: Accessor<boolean>;
  onClose: () => void;
}

export const Waitlist: Component<WaitlistProps> = (props) => {
  const form = createForm<Waitlist>({ extend: validator({ schema: WaitlistSchema }) });
  if (!props.isOpen()) return null;
  return (
    <Portal>
      <div></div>
    </Portal>
  );
};
