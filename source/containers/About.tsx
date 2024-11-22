export function About() {
  const birthYear = 2005;
  const currentYear = new Date().getFullYear();

  return (
    <section id="about" class="min-h-screen space-y-12 p-4 sm:p-24">
      <div>
        <a href="#about" class="badge badge-secondary gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="inline-block size-4"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clip-rule="evenodd"
            />
          </svg>
          เกี่ยวกับ
        </a>
        <h2 class="text-4xl font-bold">ข้อมูลส่วนตัวและประวัติ</h2>
        <p>การทำความรู้จักกันนั้นเป็นเรื่องสำคัญ ดีกว่าไม่รู้จักใครเลย</p>
      </div>
      <article class="grid grid-cols-2 items-center gap-12">
        <div class="card bg-base-100/80 mx-auto w-96 shadow-[30px_30px_0_0_oklch(var(--b2)_/_0.8)] drop-shadow-[-30px_-30px_0_oklch(var(--b2)_/_0.8)] backdrop-blur-xl">
          <figure class="px-10 pt-10">
            <img
              class="h-52 w-full rounded-xl object-cover object-[0_-6rem]"
              src="./assets/who.jpg"
              width="384px"
              height="208px"
              alt="I was in high school."
            />
          </figure>
          <div class="prose card-body">
            <table>
              <tbody>
                <tr>
                  <th>ชื่อ</th>
                  <td>นาย ชัยวัฒน์ สุวรรณรัตน์ (ฟลุ๊ค)</td>
                </tr>
                <tr>
                  <th>วันเกิด</th>
                  <td>12 มกราคม 2548 ({currentYear - birthYear} ปี)</td>
                </tr>
                <tr>
                  <th>การศึกษา</th>
                  <td>มหาวิทยาลัยพะเยา</td>
                </tr>
                <tr>
                  <th></th>
                  <td>คณะเทคโนโลยีสารสนเทศและการสื่อสาร</td>
                </tr>
                <tr>
                  <th></th>
                  <td>สาขาวิศวกรรมซอฟต์แวร์</td>
                </tr>
                <tr>
                  <th>บ้านเกิด</th>
                  <td>ประเทศไทย</td>
                </tr>
                <tr>
                  <th>ภาษา</th>
                  <td>
                    <span class="badge badge-neutral">ไทย</span>
                    <span class="badge badge-neutral">Eng</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="prose">
          <h3 class="text-3xl font-bold">
            จุดเริ่มต้น<u>อันแสนเบียว</u>สู่แสนทรหด
          </h3>
          <small>
            CHASU เป็นนามแฝงที่ตัดมาจากชื่อจริงจากคำนำหน้าสามตัวและนามสกุลสองตัว
          </small>
          <p>
            จุดเริ่มต้นของผมอาจจะเกิดมาจากพ่อของผมเองที่เคยแฮ็กชาวบ้านชาวช่องเขาไปเรื่อยอย่างไปขโมยอินเทอร์เน็ตจากข้างบ้านซึ่งถูกล็อคเอามาต่อเร้าเตอร์ของบ้านเพิ่มแล้วใช้ได้เลยเฉย!
            ยิ่งบวกกับตอนนั้นเคยดูหนังแฮ็กเกอร์กับพ่อด้วยโคตรเท่ห์!!
            (ตอนนั้นผมเบียวอะไรแบบนี้มาก5555) ด้วยความสงสัยหลายๆ
            อย่างจึงเริ่มทำให้ผมเกิดความสนใจตั้งแต่เด็กเกี่ยวกับเรื่องพวกนี้
            ผมจึงเริ่มศึกษาเรื่องแนวนี้จากในเน็ตด้วยตัวเองตั้งแต่ตอนประถมเลยและภาษาแรกที่ผมเจอคือ
            HTML/CSS/JavaScript นั่นเอง
          </p>
          <blockquote>
            ช่วงหนึ่งของผมนั่นผมเคยได้เป็นสารพัดช่างมากเลยตั้งแต่พัดลม, ตู้เย็น,
            คอมพิวเตอร์ยันเครื่องปั๊มน้ำหมู่บ้าน! ทุกๆ
            วันนี้ผมยังสงสัยอยู่เลยว่าผมควรไปเป็น IT Support หรือ Software
            Engineer กันแน่
          </blockquote>
        </div>
      </article>
    </section>
  );
}
