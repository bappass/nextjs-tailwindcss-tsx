import ParagraphSection from './ParagraphSection'
import TitleSection from './TitleSection'
import ContactItem from './ContactItem'
import Field from './Field'
import Button from './Button'

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container mx-auto px-10 2xl:px-10">
        <div className="flex flex-wrap rounded-lg bg-newgray">
          <div className="borde-graymoon w-full border-b md:w-6/12 md:border-r">
            <div className="p-10 md:p-14 lg:py-16 lg:px-20">
              <TitleSection left>Contact</TitleSection>
              <ParagraphSection left>
                Beberapa cara menghubungi saya.
              </ParagraphSection>

              <ContactItem
                label="Mail"
                value="bayuajiprasetya18@gmail.com"
                icon="/mail.svg"
                className="mt-10"
              />
              <ContactItem
                label="Phone"
                value="082134040556"
                icon="/phone.svg"
                className="mt-6"
              />
              <ContactItem
                label="Twitter"
                value="@bappass"
                icon="/twitter.svg"
                className="mt-6"
              />
            </div>
          </div>
          <div className="w:full md:w-6/12">
            <form className="p-10 md:p-14 lg:py-16 lg:px-20">
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 lg:w-6/12">
                  <Field label="Name" name="name" type="text" className="" />
                </div>
                <div className="w-full px-4 lg:w-6/12">
                  <Field label="Email" name="email" type="text" className="" />
                </div>
              </div>
              <Field label="Subject" name="subject" type="text" className="" />
              <Field
                label="Message"
                name="message"
                type="textarea"
                className="h-40"
              />
              <div className="text-right">
                <Button href="#" className="" pill={false} variant="black">
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
