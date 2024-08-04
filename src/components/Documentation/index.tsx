import Snippet from "./Snippet";

const features = [
  {
    name: "General",
    description: <>Every statement should end with a semicolon.</>,
    code: `
      rakh first_name = "Anil";
      rakh last_name = "Bhandari";
      rakh age = 20;
      nikaal first_name;
      nikaal last_name;
      nikaal age;
      nikaal first_name + " " + last_name;
    `,
  },
  {
    name: "Variables",
    description: (
      <>
        Variables can be declared using <code className="font-bold">'rakh'</code>.
      </>
    ),
    code: `
    rakh a = 10;
    rakh b = 20;
    rakh c = a + b;
    rakh d = "Hello";
    rakh e;
    e = 10;
    e = e + 10;
    nikaal e;
    `,
  },
  {
    name: "Types",
    description: (
      <>
        Numbers and strings are like other languages. 
        <code className="font-bold">'sahi'</code> and{" "}
        <code className="font-bold">'galat'</code> are the boolean values.
      </>
    ),
    code: `
    rakh a = 10;
    rakh b = 10 + (15*20);
    rakh d = "ok";
    rakh c = "two";
    rakh f = sahi;
    rakh g = galat;
    `,
  },
  {
    name: "Built-ins",
    description: (
      <>
        Use <code className="font-bold">'nikaal'</code> to print anything.
      </>
    ),
    code: `
    nikaal "Hello World";
    rakh a = 20;
    nikaal a;
    nikaal "a ko value" + a;
    nikaal "Mero name Anil ho";
    nikaal "Ma" + a + " barsa ko chu";
    `,
  },
  {
    name: "Conditionals",
    description: (
      <>
        NepaliLang supports if-else-if ladder construct. The{" "}
        <code className="font-bold">'yedi'</code> block will execute if the
        condition is <code className="font-bold">'sahi'</code>. If the
        condition is not <code className="font-bold">'sahi'</code>, one of the
        subsequently added <code className="font-bold">'navaye'</code> blocks
        will execute if their respective condition is{" "}
        <code className="font-bold">'sahi'</code>. The{" "}
        <code className="font-bold">'haina bhane'</code> block will eventually
        execute if all of the above conditions are{" "}
        <code className="font-bold">'galat'</code>.
      </>
    ),
    code: `
    rakh a = 10;
    rakh b = 20;
    yedi (a > b) {
      nikaal "a chai b bhanda thulo ho";
    } navaye (a < b) {
      nikaal "a chai b bhanda sano ho";
    } haina bhane {
      nikaal "a ra b barabari cha";
    }
    `,
  },
  {
    name: "Loops",
    description: (
      <>
        Statements inside <code className="font-bold">'jaba samma'</code>{" "}
        blocks are executed as long as a specified condition evaluates to{" "}
        <code className="font-bold">'sahi'</code>. If the condition becomes{" "}
        <code className="font-bold">'galat'</code>, the loop stops executing and
        control passes to the statement following the loop. Use{" "}
        <code className="font-bold">'bhayo'</code> to break the loop and{" "}
        <code className="font-bold">'jaari rakh'</code> to continue within the loop.
      </>
    ),
    code: `
    rakh i = 0;
    nikaal "10 bhanda syano even number haru: ";
    jaba samma (i < 10) {
      i = i + 1;
      yedi (i == 10) {
        bhayo; 
      }
      yedi (i % 2 != 0) {
        jaari rakh; 
      }
      nikaal i;
    }
    `,
  },  
  {
    name: "Functions which returns value",
    description: (
      <>
        Functions which return a value can be declared using{" "}
        <code className="font-bold">'kaam ra firta'</code>. You can call the function
        using the function name. It is necessary to store the returned value in a variable.
      </>
    ),
    code: `
    kaam ra firta add(a, b) {
      rakh c = a + b;
      firta c;
    }
    rakh x = add(5, 10); 
    nikaal x;
    `
  },
  {
    name: "Functions which does not return value",
    description: (
      <>
        Functions which do not return a value can be declared using{" "}
        <code className="font-bold">'kaam'</code>. You can call the function
        using the function name.
      </>
    ),
    code: `
    kaam printName(name) {
      nikaal name;
    }
    printName("Anil");
    `
  },
];

const supports = [
  {
    name : "Supported Operators",
    value: `  "+", "-", "*", "/", "%"`
  },
  {
    name : "Supported Comparison Operators",
    value: `  ">", "<", ">=", "<=", "==", "!="`
  },
  {
    name: "Supported increment and decrement operators",
    value: `  "++", "--"`
  },
  {
    name: "Supported Logical Operators",
    value: "It does not support logical operators yet."
  },
  {
    name: "Supported Bitwise Operators",
    value: "It does not support bitwise operators yet."
  }, 
  {
    name: "Supported Assignment Operators",
    value: "It does not support assignment operators yet."
  },
];

export default function Documentation() {
  return (
    <div>
      <div className="max-w-2xl mx-auto md:py-10 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            Documentation 
          </h2>
          <span className="text-md text-red-500">(Testing Version.)</span>
          <p className="mt-4 text-gray-600">
            Inspired by Bhailang and the flexibility of TypeScript, I aim to
            create a Nepali language-based syntax.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-600 pt-4">
                <div className="font-medium text-gray-600">{feature.name}</div>
                <div className="mt-2 text-sm text-gray-600">
                  {feature.description}
                </div>
                <Snippet code={feature.code} />
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              Supports 🚀 
            </h2>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {supports.map((support) => (
                <div key={support.name} className="border-t border-gray-600 pt-4">
                  <div className="font-medium text-gray-600">{support.name}</div>
                  <div className="mt-2 text-sm text-gray-600">
                    <Snippet code={support.value} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
