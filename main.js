/* ─── QUIZ DATA ──────────────────────────────────────── */
const QUIZZES = {
    singleton: [
        {
            q: 'What does Singleton guarantee?',
            opts: [
                'Only one shared instance exists',
                'Objects are created faster automatically',
                'Multiple instances improve scalability',
                'Memory cleanup happens automatically'
            ],
            ans: 0,
            exp: 'Singleton ensures only one instance is ever created — every getInstance() returns the same object.'
        },
        {
            q: 'Which is a common real-world use case for Singleton?',
            opts: [
                'Array sorting utilities',
                'Logger or configuration manager',
                'Handling button click animations',
                'Looping through collections'
            ],
            ans: 1,
            exp: 'Logger, config settings, DB connection pool — all need one shared instance across the app.'
        },
        {
            q: 'What is a major drawback of Singleton?',
            opts: [
                'It increases rendering time',
                'It cannot work with functions',
                'Shared state can make testing difficult',
                'It always requires inheritance'
            ],
            ans: 2,
            exp: "Global state makes testing painful — you can't easily inject mocks or reset between tests."
        },
        {
            q: 'What happens if getInstance() is called multiple times?',
            opts: [
                'A new object is created each time',
                'The application throws an exception',
                'The method returns undefined',
                'The same instance is returned every time'
            ],
            ans: 3,
            exp: "That's the whole point — a === b is true because getInstance() always returns the same object."
        },
        {
            q: 'How is Singleton different from a global variable?',
            opts: [
                'They behave exactly the same',
                'Singleton controls instance creation and access',
                'Global variables improve performance',
                'Singleton always consumes less memory'
            ],
            ans: 1,
            exp: 'A global var is just a reference. Singleton controls creation — lazy init, validation, one-time setup.'
        }
    ],
    'factory-method': [
        {
            q: 'What is the main benefit of Factory Method?',
            opts: [
                'It separates object creation from usage logic',
                'It guarantees only one object exists',
                'It automatically improves performance',
                'It removes the need for constructors'
            ],
            ans: 0,
            exp: "The client just says 'give me an admin user' — it doesn't need to know which class gets created."
        },
        {
            q: "What does UserFactory('admin') typically return?",
            opts: [
                "The string 'admin'",
                'A generic plain object',
                'An empty value',
                'An AdminUser instance with its own behavior'
            ],
            ans: 3,
            exp: "The factory maps 'admin' → AdminUser class and returns new AdminUser() — the client stays clean."
        },
        {
            q: 'What problem does Factory Method mainly solve?',
            opts: [
                'Repeated if/else or switch logic for creating objects',
                'Handling asynchronous code execution',
                'Reducing browser memory usage',
                'Managing DOM event listeners'
            ],
            ans: 0,
            exp: 'Without Factory, every feature that creates users has its own if/else — Factory centralizes it.'
        },
        {
            q: 'Which SOLID principle is commonly supported by Factory Method?',
            opts: [
                'Single Responsibility Principle',
                'Liskov Substitution Principle',
                'Open/Closed Principle',
                'Interface Segregation Principle'
            ],
            ans: 2,
            exp: 'Add MemberUser to the factory map — no need to touch existing client code. Open for extension.'
        },
        {
            q: 'When is Factory Method usually unnecessary?',
            opts: [
                'When applications support many object types',
                'When polymorphism is heavily used',
                'When object types change frequently',
                'When creation logic is simple and only one type exists'
            ],
            ans: 3,
            exp: 'If you have one type and creation is trivial, a factory just adds unnecessary complexity.'
        }
    ],
    'abstract-factory': [
        {
            q: 'How does Abstract Factory differ from Factory Method?',
            opts: [
                'Abstract Factory creates related product families',
                'Both patterns solve the exact same problem',
                'Abstract Factory removes the need for interfaces',
                'Factory Method creates multiple product families'
            ],
            ans: 0,
            exp: 'Abstract Factory = whole matching family (Button + Card + Badge). Factory Method = one product at a time.'
        },
        {
            q: 'What issue does Abstract Factory help avoid?',
            opts: [
                'Unexpected memory allocation',
                'Mixing incompatible UI components together',
                'Conflicts between execution threads',
                'Slow network communication'
            ],
            ans: 1,
            exp: 'It guarantees that all created components belong to the same family — no accidental mismatches.'
        },
        {
            q: 'What does renderProfile(new DarkTheme()) guarantee?',
            opts: [
                'Only some UI elements use the dark style',
                'The theme changes dynamically at runtime',
                'Components may use mixed themes',
                'All generated components stay visually consistent'
            ],
            ans: 3,
            exp: 'The factory produces a matching set — button() and card() both come from DarkTheme.'
        },
        {
            q: 'What does the client depend on in Abstract Factory?',
            opts: [
                'Concrete implementation classes',
                'Database configuration details',
                'Factory abstractions instead of concrete products',
                'Internal rendering logic'
            ],
            ans: 2,
            exp: 'Client talks to the factory interface only — never knows about DarkButton or LightCard directly.'
        },
        {
            q: 'What is a common trade-off of Abstract Factory?',
            opts: [
                'It increases rendering speed too much',
                'Adding a new product requires changes in all factories',
                'It only works with singleton objects',
                'It removes support for inheritance'
            ],
            ans: 1,
            exp: 'Add a Modal component? You must add createModal() to DarkTheme, LightTheme, and every other factory.'
        }
    ],
    builder: [
        {
            q: 'What problem does the Builder pattern mainly solve?',
            opts: [
                'Constructors with too many unclear parameters',
                'Sharing state between multiple objects',
                'Restricting object creation to one instance',
                'Managing asynchronous callback chains'
            ],
            ans: 0,
            exp: "Instead of new User('Ali', 25, true, false, 'Cairo') — Builder gives you readable named steps."
        },
        {
            q: 'Why does method chaining work in Builder?',
            opts: [
                'Each method returns the current builder instance',
                'The builder internally uses async functions',
                'Static methods automatically chain together',
                'Abstract classes enable chained execution'
            ],
            ans: 0,
            exp: 'return this at the end of each method lets you chain: .setEmail().setAge().setAdmin().build().'
        },
        {
            q: 'What is usually returned by the final build() method?',
            opts: [
                'The builder configuration itself',
                'A deferred Promise object',
                'The completed object instance',
                'A collection of intermediate values'
            ],
            ans: 2,
            exp: '.build() assembles all the set properties and returns the final, ready-to-use product object.'
        },
        {
            q: 'When is Builder preferred over a normal constructor?',
            opts: [
                'When objects contain very few properties',
                'When many configuration values are optional',
                'When enforcing a singleton architecture',
                'When objects contain no internal state'
            ],
            ans: 1,
            exp: 'Builder shines when you have optional fields — set only what you need, skip the rest.'
        },
        {
            q: 'Which is a practical example of the Builder pattern?',
            opts: [
                'Parsing JSON strings into objects',
                'Looping through arrays with forEach()',
                'Scheduling delayed execution with setTimeout()',
                'Fluent query builders such as Knex'
            ],
            ans: 3,
            exp: "knex('users').where('age', '>', 20).select('name').limit(10) — that's Builder pattern."
        }
    ],
    prototype: [
        {
            q: 'Why would we use clone() in the Prototype pattern?',
            opts: [
                'To enforce a single shared instance',
                'To reuse the exact same object reference',
                'To lock the object from modification',
                'To duplicate an existing object with small changes'
            ],
            ans: 3,
            exp: 'ali and ahmed share the same defaults — clone and only change role. No repetition needed.'
        },
        {
            q: 'What is the difference between shallow and deep cloning?',
            opts: [
                'They produce identical results in all cases',
                'Shallow cloning keeps nested references shared',
                'Deep cloning only works with primitive values',
                'Shallow cloning removes inherited properties'
            ],
            ans: 1,
            exp: 'Shallow: nested objects are still shared (same reference). Deep: fully independent copy.'
        },
        {
            q: 'What does Object.create(proto) actually do?',
            opts: [
                'Creates a new object linked to proto through inheritance',
                'Copies every property directly from proto',
                'Builds a fully independent deep copy',
                'Combines multiple objects into one'
            ],
            ans: 0,
            exp: "Object.create sets proto as the new object's prototype — it inherits all properties and methods."
        },
        {
            q: 'What happens when a property is missing on an object?',
            opts: [
                'JavaScript immediately returns undefined',
                'A runtime error is automatically thrown',
                'The engine searches through the prototype chain',
                'The value is replaced with null automatically'
            ],
            ans: 2,
            exp: "JS checks the object, then its prototype, then the prototype's prototype — up to null."
        },
        {
            q: 'What is the purpose of structuredClone() in JavaScript?',
            opts: [
                'To create a full deep copy of a value',
                'To duplicate only top-level properties',
                'To establish a prototype inheritance chain',
                'To enforce singleton-style behavior'
            ],
            ans: 0,
            exp: 'structuredClone() is a built-in JS API for deep cloning — handles nested objects and arrays correctly.'
        }
    ],
    adapter: [
        {
            q: 'What is the best real-world analogy for the Adapter pattern?',
            opts: [
                'A mirror reflecting objects',
                'A database handling queries',
                'A production factory line',
                'A travel power adapter that makes different plugs work with foreign sockets'
            ],
            ans: 3,
            exp: 'Adapter converts one interface to another — just like a travel adapter converts plug shapes.'
        },
        {
            q: 'What does a UserAdapter typically do?',
            opts: [
                'Creates a completely new user object',
                'Checks if user data is valid',
                'Maps external fields to internal format without changing values',
                'Stores user data for later use'
            ],
            ans: 2,
            exp: 'It wraps the old API response and re-maps property names to match what the new code expects.'
        },
        {
            q: 'How is Adapter different from Facade?',
            opts: [
                'Adapter fixes interface mismatch; Facade simplifies complex systems',
                'They both solve the same problem',
                'Facade is used for converting interfaces',
                'Adapter is used only for simplification'
            ],
            ans: 0,
            exp: 'Adapter: one incompatible → one compatible. Facade: many complex parts → one simple interface.'
        },
        {
            q: 'When is the Adapter pattern used?',
            opts: [
                'When improving application speed',
                'When adding caching layers',
                'When using a library with an incompatible interface',
                'When building undo/redo systems'
            ],
            ans: 2,
            exp: "When you can't modify the library but need it to fit your existing interface — wrap it."
        },
        {
            q: 'What does an Adapter actually change?',
            opts: [
                'The structure of the interface only',
                'The stored data values',
                'The object’s internal type',
                'The original library implementation'
            ],
            ans: 0,
            exp: "Adapter is about interface translation — full_name → name. The value 'Ali Ahmed' stays the same."
        }
    ],
    bridge: [
        {
            q: 'What problem does Bridge solve?',
            opts: [
                'Inefficient memory allocation',
                'Asynchronous callback hell',
                'Data caching and persistence',
                'Class explosion in N×M hierarchies'
            ],
            ans: 3,
            exp: 'Without Bridge: EmailAlert, SMSAlert, EmailReminder, SMSReminder... With Bridge: compose freely.'
        },
        {
            q: "In the notification example, what is the 'abstraction'?",
            opts: [
                'Email and SMS services',
                'The high-level notification type',
                'The central ChatRoom logic',
                'The global user state object'
            ],
            ans: 1,
            exp: "Abstraction = the high-level concept (Alert, Reminder). Implementation = how it's sent (Email, SMS)."
        },
        {
            q: 'How is Bridge different from Adapter?',
            opts: [
                'Bridge is intentional design; Adapter is a retrofit',
                'Bridge handles legacy code; Adapter is for new API',
                'Adapter is structurally identical to the Bridge pattern',
                'Bridge focuses on interface; Adapter focuses on logic'
            ],
            ans: 0,
            exp: "Bridge: intentional design from the start. Adapter: a retrofit solution for code you can't change."
        },
        {
            q: 'What is the key benefit of Bridge?',
            opts: [
                'Significant boost in runtime speed',
                'Independent evolution of abstraction/logic',
                'Automatic reduction in memory footprint',
                'Native support for parallel processing'
            ],
            ans: 1,
            exp: 'Add PushNotification without touching Alert or Reminder. Add Reminder without touching Email or SMS.'
        },
        {
            q: 'What would happen WITHOUT Bridge in the notification example?',
            opts: [
                'The system architecture remains scalable',
                'Application performance is optimized',
                'The codebase becomes easier to debug',
                'Unique classes are needed for each combination'
            ],
            ans: 3,
            exp: 'N types × M senders = N×M classes. Bridge reduces this to N + M classes.'
        }
    ],
    composite: [
        {
            q: 'What does Composite allow you to do?',
            opts: [
                'Cache complex objects efficiently',
                'Enforce strict access control rules',
                'Unify treatment of individual and grouped objects',
                'Persist and restore internal object states'
            ],
            ans: 2,
            exp: 'Call .show() on a single Permission or a whole PermissionGroup — same call, same interface.'
        },
        {
            q: 'What data structure does Composite represent?',
            opts: [
                'A flat key-value hash map',
                'A doubly-linked sequence list',
                'A recursive part-whole tree hierarchy',
                'A last-in-first-out memory stack'
            ],
            ans: 2,
            exp: 'Composite = tree: leaves are individual items (Permission), composites are groups (PermissionGroup).'
        },
        {
            q: 'In the user example, what does PermissionGroup.show() do?',
            opts: [
                'Logs only the parent group identifier',
                'Logs itself then delegates to all child nodes',
                'Calculates the total sum of permissions',
                'Validates if the nested group is empty'
            ],
            ans: 1,
            exp: 'It displays itself, then iterates children calling show() on each — recursion works naturally.'
        },
        {
            q: 'What must both leaf and composite classes share?',
            opts: [
                'A unified interface with common method signatures',
                'Identical constructor parameters and logic',
                'Global static utility methods for shared state',
                'Encapsulated private variables and helpers'
            ],
            ans: 0,
            exp: "Both implement the same interface — that's what lets the client treat them interchangeably."
        },
        {
            q: 'A real-world example of Composite?',
            opts: [
                'Paginated responses from a REST API',
                'Asynchronous task scheduling via timers',
                'Inheritance lookup through prototype chains',
                'Recursive directory and file system structures'
            ],
            ans: 3,
            exp: 'Folder.size() adds up all files inside, including files inside sub-folders — naturally recursive.'
        }
    ],
    decorator: [
        {
            q: 'In the user example, what does getInfo() return after two decorators?',
            opts: [
                "The initial raw 'Ali' string",
                'A stack overflow error message',
                'The unmodified user instance',
                'The base string with all added marks'
            ],
            ans: 3,
            exp: 'PremiumDecorator adds ⭐, VerifiedDecorator adds ✅ — they stack on top of each other.'
        },
        {
            q: 'How does Decorator differ from Inheritance?',
            opts: [
                'Dynamic runtime behavior vs static design-time logic',
                'Inheritance is deprecated in modern OOP standards',
                'Decorator requires strictly abstract base components',
                'There is no functional difference between the two'
            ],
            ans: 0,
            exp: 'Inheritance: compile-time, static. Decorator: runtime, composable — mix and match behaviors.'
        },
        {
            q: 'What is the difference between Decorator and Proxy?',
            opts: [
                'Proxy increases speed while Decorator adds features',
                'Decorator changes the interface while Proxy hides it',
                'Decorator adds functionality; Proxy manages access',
                'Both patterns are identical in structure and intent'
            ],
            ans: 2,
            exp: "Decorator = 'I want to do MORE'. Proxy = 'I control WHETHER and HOW you reach the object'."
        },
        {
            q: 'Why is Decorator better than creating subclasses for each combination?',
            opts: [
                'Subclasses consume significantly more heap memory',
                'Prevents class explosion by composing at runtime',
                'Decorators are natively optimized by the JS engine',
                'Hard-coded subclasses are always the preferred way'
            ],
            ans: 1,
            exp: 'With Decorator, you compose behaviors at runtime — no need for a class per combination.'
        },
        {
            q: 'Where is Decorator pattern used in real JavaScript?',
            opts: [
                'Standard Array transformation like .map()',
                'Middleware chains and Higher-Order Components',
                'Parsing data strings into JSON objects',
                'Creating objects via the prototype chain'
            ],
            ans: 1,
            exp: 'Express: middleware wraps request handlers. React HOC: wraps components. Both are Decorators.'
        }
    ],

    facade: [
    {
        q: 'In the user example, what does auth.register() hide from the caller?',
        opts: [
            'Strict data validation and schema sanitization',
            "Cryptographic hashing of sensitive user credentials",
            'Orchestration of database, email, and session logic',
            'Synchronous return values and primitive error codes'
        ],
        ans: 2,
        exp: "The caller just calls register() — they don't know or care about DB, email, session internals."
    },
    {
        q: 'Does Facade prevent direct access to the subsystem?',
        opts: [
            'Yes — it acts as a mandatory encapsulation layer',
            'Yes, unless specific bypass flags are enabled',
            'Only when the environment runs in production mode',
            'No — it is a convenience entry point; subsystems stay open'
        ],
        ans: 3,
        exp: 'Facade provides a shortcut, not a wall. You can still access subsystems directly if needed.'
    },
    {
        q: 'What is the difference between Facade and Adapter?',
        opts: [
            'Facade simplifies an interface; Adapter converts one',
            'Adapter handles multiple modules; Facade wraps one',
            'Facade is a structural type; Adapter is behavioral',
            'Facade bridges platforms; Adapter reduces complexity'
        ],
        ans: 0,
        exp: 'Facade: complex → simple. Adapter: incompatible interface A → compatible interface B.'
    },
    {
        q: 'Which design principle does Facade most directly support?',
        opts: [
            'Open/Closed Principle for extensible components',
            'Least Knowledge Principle for minimal interaction',
            'Liskov Substitution for parent-child consistency',
            'Dependency Inversion for abstract implementations'
        ],
        ans: 1,
        exp: 'Principle of Least Knowledge (Law of Demeter) — minimize what each component knows about others.'
    },
    {
        q: 'A real backend example of Facade?',
        opts: [
            'Passing a comparator function into Array.sort()',
            'Mapping data structures via the JSON.parse() API',
            'The browser mapping events to the Event.target property',
            'A Service layer wrapping DB and external API logic'
        ],
        ans: 3,
        exp: 'The service layer IS a Facade — it hides DB/cache/email complexity behind simple method calls.'
    }
],
    flyweight: [
    {
        q: 'What problem does Flyweight solve?',
        opts: [
            'Tight coupling between unrelated logic modules',
            'High memory overhead from redundant data storage',
            'Latency issues within asynchronous execution paths',
            'Global state management across isolated modules'
        ],
        ans: 1,
        exp: 'Instead of every user object storing the same Egypt country data — share one object between all.'
    },
    {
        q: "What is 'intrinsic' state in Flyweight?",
        opts: [
            'Unique instance data like a specific user ID',
            'Methods and event handlers bound to the object',
            'Constant, shared data stored within the flyweight',
            'Dynamic records retrieved from external databases'
        ],
        ans: 2,
        exp: "Intrinsic = shared + doesn't change per instance. Country name and flag are the same for all Egyptian users."
    },
    {
        q: "What is 'extrinsic' state in Flyweight?",
        opts: [
            'The cached data reference inside the flyweight',
            'Internal prototype methods and class definitions',
            'Unique data provided to the flyweight from outside',
            'Static configuration passed during initialization'
        ],
        ans: 2,
        exp: 'Extrinsic = unique per object. User name and ID are different — passed in externally, not stored in the flyweight.'
    },
    {
        q: "In the user example, what does getCountry('EG') return for 1000 users?",
        opts: [
            'A single shared reference for all 1000 instances',
            'A fresh object copy to prevent state corruption',
            'A deep-frozen clone for every individual request',
            'A null value once the internal pool limit is met'
        ],
        ans: 0,
        exp: "CountryPool['EG'] is created once and reused — ali.country === ahmed.country is true."
    },
    {
        q: 'What is the difference between Flyweight and Singleton?',
        opts: [
            'Both patterns follow the same structural definition',
            'Singleton is type-specific; Flyweight is app-wide',
            'Flyweight shares per-type; Singleton is a total solo',
            'Singleton handles primitives; Flyweight handles data'
        ],
        ans: 2,
        exp: 'Flyweight: one shared instance per type (Egypt, USA, Germany). Singleton: one instance total.'
    }
],
    proxy: [
    {
        q: 'In the user example, what does the Proxy add?',
        opts: [
            'New public methods for the core user object',
            'Custom serialization formats for network I/O',
            'Basic request logging and telemetry metrics',
            'Security validation and result caching layers'
        ],
        ans: 3,
        exp: "Same getUser() interface — but now there's an auth check and cache layer before hitting the DB."
    },
    {
        q: 'What are the main types of Proxy?',
        opts: [
            'Only the Caching type is recognized globally',
            'Remote proxy is the sole definition in GoF',
            'Standard and Dynamic are the only valid types',
            'Virtual, Protection, Caching, and Remote types'
        ],
        ans: 3,
        exp: 'Virtual: delay creation. Protection: check permissions. Caching: store results. Remote: local stand-in.'
    },
    {
        q: 'How does the built-in JS Proxy work?',
        opts: [
            'Produces shallow copies of targeted entities',
            'Hooks into operations via handler trap methods',
            'Generates deep clones for immutable mirroring',
            'Locks objects to prevent all downstream changes'
        ],
        ans: 1,
        exp: 'JS Proxy wraps an object with traps — get, set, apply, etc. Vue 3 uses this for reactivity.'
    },
    {
        q: 'What is the key difference between Proxy and Decorator?',
        opts: [
            'Structural definitions are nearly identical',
            'Decorator manages access; Proxy adds features',
            'Proxy manages access; Decorator adds features',
            'Proxy aggregates objects; Decorator wraps one'
        ],
        ans: 2,
        exp: "Proxy = 'should you be allowed to reach this?' Decorator = 'let me add something on top'."
    },
    {
        q: 'What framework uses the Proxy pattern for its reactivity system?',
        opts: [
            'Vue 3 — uses native traps to track mutations',
            'React — implements state hooks through Proxy',
            'Angular — utilizes zones for async observation',
            'Svelte — leverages Proxies for compiler tasks'
        ],
        ans: 0,
        exp: 'Vue 3 wraps reactive objects in JS Proxy — any get/set triggers the reactivity system.'
    }
],
    observer: [
    {
        q: 'What relationship does Observer define?',
        opts: [
            'One-to-one — a subject linked to a single object',
            'One-to-many — a subject notifies multiple listeners',
            'Many-to-many — all entities sync with each other',
            'Many-to-one — several objects update one subject'
        ],
        ans: 1,
        exp: 'One UserStore → many subscribers (Header, Dashboard, Notifications). All update on one change.'
    },
    {
        q: 'In the user example, what happens when updateProfile() is called?',
        opts: [
            'Notification is sent only to the first subscriber',
            'The data store resets its internal memory state',
            'All registered listener functions execute immediately',
            'The system waits for observers to poll for updates'
        ],
        ans: 2,
        exp: 'store.emit() iterates all listeners and calls each one — Header and Dashboard both update.'
    },
    {
        q: 'How does Observer achieve loose coupling?',
        opts: [
            'Subject tracks subscriptions without knowing identities',
            'Subject and observers implement a shared rigid class',
            'Observers inherit properties directly from the subject',
            'All parties communicate via a shared global variable'
        ],
        ans: 0,
        exp: "Subject fires events; observers register themselves. Neither needs to know the other's class."
    },
    {
        q: 'Real-world Observer examples in JavaScript?',
        opts: [
            'Sorting algorithms using custom comparator logic',
            'Data transformation via standard JSON parsing APIs',
            'Inheritance setup through the prototype object chain',
            'Event listeners, Emmitters, and Store subscriptions'
        ],
        ans: 3,
        exp: 'DOM events, EventEmitter, Redux — all implement the Observer pattern at their core.'
    },
    {
        q: 'What is the difference between Observer and Mediator?',
        opts: [
            'Observer uses direct signals; Mediator uses a hub',
            'Both patterns consolidate logic into one central bus',
            'Mediator is exclusively for one-to-many broadcasts',
            'Observer relies on a hub; Mediator uses direct calls'
        ],
        ans: 0,
        exp: 'Observer: direct relationship. Mediator: everything routes through the hub — more coordinated.'
    }
],
    strategy: [
        {
            q: 'In the user example, what does setStrategy(GoogleLogin) do?',
            opts: [
                'Removes the previous algorithm from the heap',
                'Triggers a full re-init of the authentication service',
                'Swaps the active algorithm for the next execution',
                'Instantiates a new AuthService with Google config'
            ],
            ans: 2,
            exp: 'setStrategy replaces the current algorithm — same AuthService, different behavior on next call.'
        },
        {
            q: 'What problem does Strategy solve?',
            opts: [
                'Memory leaks caused by persistent event listeners',
                'Prototype pollution during heavy object composition',
                'Data race conditions within concurrent logic paths',
                'Bloated conditional blocks for algorithm selection'
            ],
            ans: 3,
            exp: "Without Strategy: if(method==='email')... else if(method==='google')... — hard to extend."
        },
        {
            q: 'What is the difference between Strategy and State?',
            opts: [
                'No functional difference exists between the two',
                'Strategy is client-driven; State is object-driven',
                'State manages the selection between algorithms',
                'Strategy controls internal lifecycle state changes'
            ],
            ans: 1,
            exp: "Strategy: you choose. State: the object decides based on what state it's in."
        },
        {
            q: 'In JavaScript, what is the simplest Strategy implementation?',
            opts: [
                'Passing functions or objects as dynamic arguments',
                'Using a central switch statement within the class',
                'Delegating method lookup to the prototype chain',
                'Emitting events to determine the active strategy'
            ],
            ans: 0,
            exp: 'Pass any object with an auth() method — no class hierarchy needed. Functions as strategies.'
        },
        {
            q: 'Strategy supports which SOLID principle most directly?',
            opts: [
                'Single Responsibility — atomic logic isolation',
                'Open/Closed — extension without modification',
                'Liskov Substitution — interchangeable subtypes',
                'Interface Segregation — lean dependency graphs'
            ],
            ans: 1,
            exp: 'Add AppleLogin to the map — AuthService never changes. Open for extension, closed for modification.'
        }
    ],
    command: [
        {
            q: 'In the user example, what does cmd.undo() do?',
            opts: [
                'Permanently purges the user from the database',
                'Instantiates a secondary inverse command class',
                'Reverts the user name to its stored prior state',
                'Throws a RollbackError exception on empty history'
            ],
            ans: 2,
            exp: "undo() restores this.oldName — which was saved before execute() changed it to 'Ahmed'."
        },
        {
            q: 'What makes undo possible in Command pattern?',
            opts: [
                'Global state snapshots managed via Singleton',
                'Object cloning facilitated by the Prototype pattern',
                'Broadcasting state changes through Observer events',
                'Capturing local state and storing objects in a stack'
            ],
            ans: 3,
            exp: 'this.oldName = user.name saved before the change. history.pop().undo() restores it.'
        },
        {
            q: 'What is the difference between Command and Strategy?',
            opts: [
                'The patterns are functionally and structurally identical',
                'Command handles action history; Strategy swaps logic',
                'Strategy natively implements the undo/redo interface',
                'Command logic cannot be queued for deferred execution'
            ],
            ans: 1,
            exp: 'Command = store and replay actions. Strategy = choose which algorithm runs.'
        },
        {
            q: 'What are the 4 participants in Command pattern?',
            opts: [
                'Command, ConcreteCommand, Invoker, and Receiver',
                'Factory, Builder, Singleton, and Prototype entities',
                'Observer, Subject, Event, and Handler components',
                'Client, Server, Request, and Response primitives'
            ],
            ans: 0,
            exp: 'ConcreteCommand implements execute/undo. Invoker triggers it. Receiver does the actual work.'
        },
        {
            q: 'A real-world use case for Command pattern?',
            opts: [
                'Pagination logic for distributed API result sets',
                'Object duplication using prototype-based inheritance',
                'Lazy-loading media assets within the user viewport',
                'Transactional undo/redo and task scheduling systems'
            ],
            ans: 3,
            exp: 'Text editor: each keystroke is a command stored in history. Ctrl+Z pops and undoes the last one.'
        }
    ],
    iterator: [
        {
            q: 'What does implementing Symbol.iterator on a class allow?',
            opts: [
                'Faster index-based retrieval from internal buffers',
                'Prevention of accidental mutations to the collection',
                'Native support for iteration and spread operations',
                'Automatic instantiation of a collection-level Singleton'
            ],
            ans: 2,
            exp: 'Any object with Symbol.iterator works with for...of — the browser knows how to step through it.'
        },
        {
            q: 'In the user example, what does for (const user of list) actually do under the hood?',
            opts: [
                'Iterates the internal array by direct index lookup',
                'Performs a shallow clone of the dataset for safety',
                'Retrieves an iterator and invokes the next() method',
                'Attempts to cast the object into a standard Array type'
            ],
            ans: 2,
            exp: 'for...of calls Symbol.iterator, gets the iterator object, then calls next() on each iteration.'
        },
        {
            q: 'What is a JavaScript Generator (function*)?',
            opts: [
                'A factory that creates single instances of iterables',
                'A specialized implementation of the Observer pattern',
                'An asynchronous wrapper for complex Promise chains',
                'A stateful function that yields values incrementally'
            ],
            ans: 3,
            exp: 'function* with yield IS an iterator. Each yield pauses and returns a value — resumed on next call.'
        },
        {
            q: 'Why is lazy iteration useful?',
            opts: [
                'Computes values on-demand for infinite sequences',
                'Guarantees elements are processed in a sorted order',
                'Minimizes memory by applying compression to data',
                'Forces the runtime to use asynchronous thread pools'
            ],
            ans: 0,
            exp: 'A fibonacci generator can run forever — it only computes the next number when you ask for it.'
        },
        {
            q: 'What is the key advantage of Iterator over exposing the raw internal array?',
            opts: [
                'Iterators are natively optimized by the V8 engine',
                'Decouples the client loop from internal structures',
                'Provides wider cross-browser support for data tasks',
                'There is no functional benefit over standard arrays'
            ],
            ans: 1,
            exp: 'Client only knows next() — you can change from array to linked list to DB cursor without breaking callers.'
        }
    ],
    mediator: [
    {
        q: 'In the chat example, does Ali directly reference Ahmed?',
        opts: [
            "Yes — Ali maintains a direct pointer to Ahmed's instance",
            "Yes — communication occurs via a shared global variable",
            "No — entities write to and poll a shared message buffer",
            "No — participants only interface with the central Room"
        ],
        ans: 3,
        exp: 'Ali calls this.room.send(msg, this) — he has NO idea who else is in the room.'
    },
    {
        q: 'What is the best real-life analogy for Mediator?',
        opts: [
            'A mirror reflecting visual signals between two observers',
            'A database consolidating logs from distributed sources',
            'Air traffic control managing plane-to-tower signals',
            'A factory method generating instances on client demand'
        ],
        ans: 2,
        exp: "ATC is the mediator: all planes communicate through it — planes don't radio each other directly."
    },
    {
        q: 'What does Mediator reduce in a system with N components?',
        opts: [
            'Volatile memory consumption across active instances',
            'Direct dependencies by routing all traffic to a hub',
            'Deep inheritance chains and nested class hierarchies',
            'The total volume of event listeners per logic module'
        ],
        ans: 1,
        exp: 'Without Mediator: every component knows every other. With it: each only knows the mediator.'
    },
    {
        q: 'What is the difference between Mediator and Observer?',
        opts: [
            'Mediator is bidirectional; Observer is a one-way push',
            'Both patterns consolidate logic into a single event bus',
            'Observer relies on a hub; Mediator uses direct linkages',
            'Mediator is restricted to one-to-many broadcast logic'
        ],
        ans: 0,
        exp: 'Observer: subject pushes events outward. Mediator: all parties talk through the hub, both ways.'
    },
    {
        q: 'A frontend example of Mediator pattern?',
        opts: [
            'Redux store managing state-driven component updates',
            'Data transformation pipelines within Array.map() calls',
            'Persistent storage synchronization via localStorage',
            'Coordinating concurrent tasks using Promise.all()'
        ],
        ans: 0,
        exp: 'Redux store is a Mediator — components dispatch to it and subscribe from it, never talking directly.'
    }
],
   memento: [
    {
        q: 'In the user example, what does profile.save() return?',
        opts: [
            'The active profile instance with its methods',
            'A Promise resolving to a serialized state',
            'A plain snapshot object of current properties',
            'null — the save operation is a pure side effect'
        ],
        ans: 2,
        exp: 'save() returns a plain object copy of the current state — cheap, simple, and immutable.'
    },
    {
        q: 'What are the 3 participants in Memento pattern?',
        opts: [
            'Command, Invoker, and the Target Receiver',
            'Originator, Memento, and the Caretaker',
            'Subject, Observer, and the Event Object',
            'Factory, Product, and the Client Entity'
        ],
        ans: 1,
        exp: 'Originator = the profile. Memento = the snapshot. Caretaker = the snapshots array.'
    },
    {
        q: "Why can't the Caretaker read the Memento's internal contents?",
        opts: [
            'The snapshot binary format is non-readable',
            'The Caretaker operates on a background thread',
            'Access is restricted by runtime naming proxies',
            'To maintain the Originator’s encapsulation'
        ],
        ans: 3,
        exp: 'The Caretaker only stores and returns Mementos — reading internals would violate encapsulation.'
    },
    {
        q: 'How is Memento different from Command for implementing undo?',
        opts: [
            'There is no structural difference in logic',
            'Command saves states; Memento reverses tasks',
            'Memento reverses tasks; Command saves states',
            'Memento restores snapshots; Command reverses tasks'
        ],
        ans: 3,
        exp: 'Memento: restore to a saved checkpoint. Command: reverse each action step by step.'
    },
    {
        q: 'A real-world use case for Memento?',
        opts: [
            'API rate limiting and request throttling',
            'Editor checkpoints and game save systems',
            'Parallel thread and pool management tasks',
            'Network caching and HTTP header validation'
        ],
        ans: 1,
        exp: 'Game checkpoints, Photoshop history, browser form autosave — all save state to restore later.'
    }
],

    state: [
        {
            q: 'In the user example, what does acc.login() return for a PendingState user?',
            opts: [
                'A specific prompt to verify the email address',
                'A generic welcome message shared by all states',
                'null — the method call is ignored for this state',
                'An AuthError exception with a pending status code'
            ],
            ans: 0,
            exp: 'PendingState.login() returns its own message — no if/else needed in the UserAccount class.'
        },
        {
            q: 'What is the key difference between State and Strategy?',
            opts: [
                'There is no structural difference between the two',
                'Strategy manages state; State remains stateless',
                'State handles transitions; Strategy swaps algorithms',
                'State is for logic; Strategy is for state machines'
            ],
            ans: 2,
            exp: 'State: the object decides when to change (pending → active). Strategy: you choose which algorithm.'
        },
        {
            q: 'What replaces the if/else chains in State pattern?',
            opts: [
                'Organized conditional blocks grouped by logic',
                'Encapsulated classes representing individual states',
                'A central switch statement with labeled cases',
                'Global flags that monitor the active system mode'
            ],
            ans: 1,
            exp: 'PendingState, ActiveState, BannedState — each class handles login() and post() its own way.'
        },
        {
            q: 'A real-world example of State pattern?',
            opts: [
                'Data filtering via the Array.prototype.filter method',
                'Object serialization during JSON.stringify execution',
                'The internal lifecycle of a JavaScript Promise object',
                'Traffic light transitions and order fulfillment flows'
            ],
            ans: 3,
            exp: 'Traffic light: Red → Green → Yellow → Red. Each color is a state with its own behavior and next state.'
        },
        {
            q: 'What is FSM and how does it relate to State pattern?',
            opts: [
                'File System Manager — a storage API for Node.js',
                'Fast State Method — a performance optimization layer',
                'Finite State Machine — the formal model for State pattern',
                'Functional State Model — a hook-based state approach'
            ],
            ans: 2,
            exp: 'FSM = formal model of states and transitions. State pattern puts each state in its own class.'
        }
    ],
    'template-method': [
        {
            q: 'In the login example, what stays fixed across EmailLogin and GoogleLogin?',
            opts: [
                'The skeleton algorithm defining the order of execution',
                'The shared implementation of the validation method',
                'The authentication logic common to both provider types',
                'The specific class naming and constructor signature'
            ],
            ans: 0,
            exp: 'The template (login()) never changes. Only validate() and authenticate() are overridden per class.'
        },
        {
            q: "What is a 'hook method' in Template Method?",
            opts: [
                'A mandatory abstract method required by the compiler',
                'A pre-constructor override executed during instantiation',
                'An optional extension point with a default behavior',
                'A persistent event listener initialized by the base class'
            ],
            ans: 2,
            exp: 'logSuccess() has a default — subclasses can override it or leave it as-is. Optional extension point.'
        },
        {
            q: 'How is Template Method different from Strategy?',
            opts: [
                'Template uses inheritance; Strategy uses composition',
                'Both patterns share an identical structural definition',
                'Strategy relies on class overrides for step selection',
                'Template Method injects discrete algorithm instances'
            ],
            ans: 0,
            exp: 'Template: subclass fills in steps (extends). Strategy: inject any algorithm object from outside (compose).'
        },
        {
            q: 'Which principle does Template Method follow?',
            opts: [
                'Dependency Inversion — relying strictly on abstractions',
                'Interface Segregation — minimizing client-facing methods',
                'Liskov Substitution — ensuring safe subtype replacement',
                'Hollywood Principle — base class calling subclass steps'
            ],
            ans: 3,
            exp: 'The base class calls the subclass methods — inversion of control. The framework is in charge.'
        },
        {
            q: 'A framework example of Template Method?',
            opts: [
                'Mapping callbacks over data via Array.prototype.map',
                'React lifecycle methods invoked by the library runtime',
                'Synchronous data persistence using the localStorage API',
                'Recursive object serialization within JSON.stringify'
            ],
            ans: 1,
            exp: 'React lifecycle: you define render() and componentDidMount(), React decides when to call them.'
        }
    ],
    chain: [
        {
            q: 'In the user example, what happens if the user is not logged in?',
            opts: [
                'AuthCheck short-circuits the chain and returns an error',
                'The request is flagged and forwarded to the next handler',
                'A 401 error is thrown and handled by the global stack',
                'The request cycle restarts from the initial chain link'
            ],
            ans: 0,
            exp: 'AuthCheck short-circuits: no token → return error immediately. The chain never continues.'
        },
        {
            q: 'What happens if no handler in the chain processes the request?',
            opts: [
                'The request loops until a valid handler is identified',
                'It reaches the end and returns an undefined result',
                'The first handler automatically executes a fallback logic',
                'The internal system invokes a built-in default catch-all'
            ],
            ans: 1,
            exp: 'If every handler passes and none claims it, the final handle() returns undefined — caller should handle.'
        },
        {
            q: 'A real-world example of Chain of Responsibility in Node.js?',
            opts: [
                'Recursive value accumulation within Array.prototype.reduce',
                'Attempting multiple decoding formats within JSON.parse',
                'Sequential property merging via Object.assign operations',
                'Express.js middleware executing next() to pass the request'
            ],
            ans: 3,
            exp: 'Express: auth → rate-limit → validate → handle. Each middleware calls next() to pass along.'
        },
        {
            q: 'What is the difference between Chain of Responsibility and Decorator?',
            opts: [
                'The patterns are structurally identical in modern JS',
                'Decorator targets single layers; Chain targets all layers',
                'Chain stops at one handler; Decorator applies all layers',
                'Chain applies all layers; Decorator stops at one handler'
            ],
            ans: 2,
            exp: 'Chain: request stops at one handler. Decorator: every layer adds its piece — all run.'
        },
        {
            q: 'DOM event bubbling is an example of which pattern?',
            opts: [
                'Factory Method — for the creation of event primitives',
                'Observer — for subscribing listeners to specific elements',
                'Chain of Responsibility — for child-to-parent propagation',
                'Singleton — ensuring a single event bus per document'
            ],
            ans: 2,
            exp: 'Click bubbles from the element up through parents — each ancestor can handle or let it continue.'
        }
    ],
    visitor: [
        {
            q: 'In the user example, what does new DiscountVisitor() do when accepted by user objects?',
            opts: [
                'Modifies core class definitions at the prototype level',
                'Applies custom logic without altering the element classes',
                'Instantiates specialized subclasses with baked-in logic',
                'Deletes user instances and replaces them with new versions'
            ],
            ans: 1,
            exp: 'FreeUser.accept(visitor) → visitor.visitFree(this). PremiumUser → visitor.visitPremium(this).'
        },
        {
            q: "What is 'double dispatch' in Visitor?",
            opts: [
                'Selection based on both visitor and element types',
                'Invoking constructors twice during object initialization',
                'Returning a tuple of values from a single method call',
                'A recursive strategy that visits each node twice'
            ],
            ans: 0,
            exp: 'element.accept(visitor) picks the element type. visitor.visitElement() picks the operation. Two choices.'
        },
        {
            q: 'What is the main trade-off of Visitor?',
            opts: [
                'High memory overhead due to short-lived object allocation',
                'Lower execution performance compared to direct calls',
                'Incompatibility with complex object inheritance chains',
                'Easy to add operations; difficult to add new element types'
            ],
            ans: 3,
            exp: 'Add ReportVisitor? Easy. Add VideoUser element? Must add visitVideo() to EVERY existing visitor.'
        },
        {
            q: 'A real-world example of Visitor?',
            opts: [
                'Filtering dataset results via Array.prototype.filter',
                'Deferring task execution using the global setTimeout',
                'Attribute resolution through the prototype lookup chain',
                'Compiler AST traversal for type-checking and optimization'
            ],
            ans: 3,
            exp: 'Each compiler phase is a Visitor that walks the AST — same tree, different operations per phase.'
        },
        {
            q: 'Why is Visitor said to violate OCP for element types?',
            opts: [
                'Adding new elements requires updating all visitor classes',
                'The pattern adheres strictly to OCP for all components',
                'Element state becomes immutable after the first traversal',
                'The visitor directly mutates private element properties'
            ],
            ans: 0,
            exp: 'New element = update N visitors. New operation = add 1 visitor. OCP is asymmetric here.'
        }
    ],
    interpreter: [
        {
            q: 'In the user example, what does the AndFilter do?',
            opts: [
                'Applies disjunctive OR logic across multiple filters',
                'Aggregates two separate datasets into a single union',
                'Filters results sequentially to satisfy both criteria',
                'Excludes all users that match the provided parameters'
            ],
            ans: 2,
            exp: "AndFilter(NameFilter('Ali'), AgeFilter(20)) → filter by name first, then age on the result."
        },
        {
            q: 'What is an AST in the context of Interpreter?',
            opts: [
                'Async State Tree — for reactive state management',
                'Abstract Syntax Tree — representing expression hierarchy',
                'A specific sorting algorithm for expression parsing',
                'A linear list structure representing grammar sequences'
            ],
            ans: 1,
            exp: 'AST nodes = operations (And, Or). Leaves = values (NameFilter, AgeFilter). Interpreter walks it.'
        },
        {
            q: 'When is Interpreter most appropriate?',
            opts: [
                'For complex general-purpose programming languages',
                'For simple grammars like DSLs or search query filters',
                'For managing high-frequency DOM event interactions',
                'For optimizing memory usage in cyclic object graphs'
            ],
            ans: 1,
            exp: 'Simple grammars: great fit. Complex languages: use parser generators (ANTLR, Bison) instead.'
        },
        {
            q: 'What does each class in Interpreter represent?',
            opts: [
                'A physical database table within a query engine',
                'A standard participant in the design pattern logic',
                'A single grammar rule with an evaluation method',
                'An individual network request in an async pipeline'
            ],
            ans: 2,
            exp: 'NameFilter, AgeFilter, AndFilter — each is one grammar rule. interpret() evaluates it.'
        },
        {
            q: 'How do Interpreter and Visitor relate?',
            opts: [
                'The patterns are functionally and logically unrelated',
                'Visitor acts as a modern replacement for Interpreter',
                'They are identical patterns using different naming',
                'Interpreter defines the AST; Visitor traverses the nodes'
            ],
            ans: 3,
            exp: 'They complement each other — Interpreter defines the structure, Visitor applies operations on it.'
        }
    ],
    constructor: [
        {
            q: 'What is the main purpose of the Constructor pattern?',
            opts: [
                'Providing a blueprint for instances with unique data',
                'Enforcing a single instance across the application',
                'Sharing data via a single global state object',
                'Managing asynchronous initialization of objects'
            ],
            ans: 0,
            exp: "new User('Ali', 25) and new User('Ahmed', 30) — same structure, different data. That's Constructor."
        },
        {
            q: "In JavaScript, what is the 'class' keyword?",
            opts: [
                'Syntactic sugar over underlying function constructors',
                'A fundamentally new object model for modern JS',
                'A native implementation of the Singleton pattern',
                'A performance-specific optimization for V8 engines'
            ],
            ans: 0,
            exp: 'class User {} compiles to a function constructor internally — just cleaner syntax on top.'
        },
        {
            q: 'Why put methods on the prototype instead of the constructor body?',
            opts: [
                'Code style consistency with no technical impact',
                'Implicit JIT-compilation benefits during execution',
                'Slightly better readability and logical grouping',
                'Memory optimization by sharing one copy among instances'
            ],
            ans: 3,
            exp: "If greet() is on 'this', every instance gets its own copy. On prototype: one shared copy for all."
        },
        {
            q: "What happens if you forget 'new' before a constructor call?",
            opts: [
                'A ReferenceError is thrown by the runtime',
                "'this' binds to the global scope or becomes undefined",
                'The function executes but returns an empty object',
                'The execution fails silently without any side effects'
            ],
            ans: 1,
            exp: "Without new, 'this' = window in non-strict mode. You accidentally pollute the global scope."
        },
        {
            q: "What does 'instanceof' check?",
            opts: [
                'The value of an internal type property on the object',
                'The presence of a property named after the constructor',
                "The existence of a prototype within the object's chain",
                'The specific memory allocation address of the instance'
            ],
            ans: 2,
            exp: 'ali instanceof User walks the prototype chain — if User.prototype is found, returns true.'
        }
    ],
    module: [
        {
            q: 'In the UserModule example, what does UserModule._password return?',
            opts: [
                'The raw string value stored in memory',
                'A ReferenceError thrown by the engine',
                'undefined — it is trapped within the closure',
                'The hashed representation of the credential'
            ],
            ans: 2,
            exp: "_password lives inside the IIFE's closure scope — nothing outside can reach it directly."
        },
        {
            q: "What creates the 'privacy' in Module pattern?",
            opts: [
                'Function closures trapping variables in scope',
                'The private keyword enforcing strict access',
                'Object.freeze() preventing state mutations',
                'WeakMap references hiding internal properties'
            ],
            ans: 0,
            exp: 'Closure = function remembers its scope. Variables inside the IIFE only live there.'
        },
        {
            q: 'What does IIFE stand for and why is it used?',
            opts: [
                'Immediately Invoked For Iteration — a loop tool',
                'Immediately Invoked Function Expression — for scope',
                'Internal Interface for Exports — a bundling rule',
                'Inline Function Invocation — for unnamed calls'
            ],
            ans: 1,
            exp: 'IIFE runs immediately, creates a private scope, and returns only what you choose to expose.'
        },
        {
            q: 'What is the difference between Module pattern and ES6 modules?',
            opts: [
                'ES6 modules are just syntactic sugar for IIFEs',
                'Module pattern is the modern industry standard',
                'ES6 modules have higher runtime memory overhead',
                'ES6 is file-based; Module pattern is closure-based'
            ],
            ans: 3,
            exp: 'ES6 modules: each file is a module. Module pattern: manually created with IIFE — the pre-ES6 solution.'
        },
        {
            q: "What does the Module pattern's return object contain?",
            opts: [
                'A reference to all internal private members',
                'A serialized snapshot of the module state',
                'Nothing — the return value is always ignored',
                'Only the public API and explicitly exposed logic'
            ],
            ans: 3,
            exp: 'return { getName, setName, checkPassword } — only these are exposed. _password stays private.'
        }
    ],
    'revealing-module': [
        {
            q: 'What is the key difference between Revealing Module and regular Module?',
            opts: [
                'Revealing Module minimizes the number of closure lookups',
                'All logic is private; the return reveals only public names',
                'Revealing Module integrates native ES6 classes internally',
                'Revealing Module utilizes Proxy objects for access control'
            ],
            ans: 1,
            exp: 'Regular Module: some functions written inside return {}. Revealing: all defined inside, return just names.'
        },
        {
            q: 'In the return object, what does { getName, getEmail } represent?',
            opts: [
                'Independent copies of the original internal functions',
                'Wrapper functions that delegate to the private members',
                'Exposed references forming a clear, explicit public API',
                'Global exports attached directly to the window object'
            ],
            ans: 2,
            exp: 'The return reveals which functions are public — others like _validate stay completely private.'
        },
        {
            q: 'What is a known limitation of Revealing Module?',
            opts: [
                'External overrides do not affect internal private calls',
                'Lack of cross-browser support without specific polyfills',
                'Significant performance degradation due to extra hops',
                'Dependency on ES6 syntax for property name shorthand'
            ],
            ans: 0,
            exp: 'Public alias points to original. Override it externally — internal code ignores your override.'
        },
        {
            q: 'What is the main readability benefit of this pattern?',
            opts: [
                'Reduction of overall lines of code in the final bundle',
                'Immediate clarity of the public API in the return block',
                'Hoisting of all private functions to the top of the file',
                'Reduced memory footprint by avoiding object duplication'
            ],
            ans: 1,
            exp: 'One glance at the return statement tells you the entire public API. Much cleaner than scattering.'
        },
        {
            q: 'When would you prefer this pattern over ES6 classes with (#)?',
            opts: [
                'In scenarios requiring strictly immutable private state',
                'When building deep inheritance trees with shared state',
                'In environments lacking support for private class fields',
                'Specifically for async code spanning execution boundaries'
            ],
            ans: 2,
            exp: 'Class private fields (#) are modern. Revealing Module = closure privacy — works everywhere.'
        }
    ],
    mixin: [
        {
            q: 'In the user example, after applying the Mixin, what can ali do?',
            opts: [
                'Invoke all methods inherited from the Mixin via the prototype',
                'Only access methods defined within the original class scope',
                'Access AdminUser methods due to shared Mixin source logic',
                'Nothing — prototype objects are immutable to Object.assign'
            ],
            ans: 0,
            exp: 'Object.assign copies Mixin methods onto the prototype — every NormalUser instance inherits them.'
        },
        {
            q: 'What problem does the Mixin pattern solve?',
            opts: [
                'Memory overhead from storing duplicate instance-level data',
                'Prevention of multiple Singleton instances within the runtime',
                'Resolution of race conditions in asynchronous event loops',
                'Code duplication across unrelated classes needing shared behavior'
            ],
            ans: 3,
            exp: 'User and Admin both need canLogin and canPost — Mixin shares the code without forcing inheritance.'
        },
        {
            q: 'Why is Mixin especially useful in JavaScript?',
            opts: [
                'JS uses single inheritance; Mixins allow behavior composition',
                'JavaScript lacks a native object inheritance model entirely',
                'Prototype lookups require Mixin optimization for speed',
                'Mixins flatten the prototype chain for better V8 execution'
            ],
            ans: 0,
            exp: 'class A extends B — only one base class. Mixin adds behaviors from anywhere, no hierarchy needed.'
        },
        {
            q: 'What is the difference between Mixin and Inheritance?',
            opts: [
                'The two concepts are functionally identical in modern JS',
                'Inheritance is the legacy approach; Mixin is its replacement',
                'Inheritance: "is-a" relationship; Mixin: "has-a" composition',
                'Mixins consistently deliver superior runtime performance'
            ],
            ans: 2,
            exp: "NormalUser 'is-a' User. But NormalUser 'has' login behavior via Mixin — composable, not hierarchical."
        },
        {
            q: 'How do you apply a Mixin to a class in JavaScript?',
            opts: [
                'Using the extends keyword to target the Mixin object',
                'Instantiating the Mixin directly via the new keyword',
                'Merging the Mixin at the module level using import/export',
                'Augmenting the ClassName.prototype using Object.assign'
            ],
            ans: 3,
            exp: 'Object.assign copies all Mixin methods onto the prototype chain — all instances inherit them.'
        }
    ]
};

/* ─── RENDER QUIZZES ─────────────────────────────────── */
function buildQuiz(id, questions) {
    const container = document.getElementById('quiz-' + id);
    if (!container) return;
    questions.forEach((q, qi) => {
        const item = document.createElement('div');
        item.className = 'question-item';
        item.innerHTML = `
      <div class="question-text" onclick="toggleQuestion(this)">
        <span><span class="q-num">Q${qi + 1}.</span> ${q.q}</span>
        <span class="q-arrow">▼</span>
      </div>
      <div class="options-wrap">
        <div class="options">
          ${q.opts.map((o, i) => `<div class="opt" data-idx="${i}" onclick="selectOpt(this,${q.ans})">${['A', 'B', 'C', 'D'][i]}. ${o}</div>`).join('')}
        </div>
        <div class="answer-reveal">✅ ${q.exp}</div>
      </div>`;
        container.appendChild(item);
    });
}

Object.entries(QUIZZES).forEach(([key, qs]) => buildQuiz(key, qs));

/* ─── STATS ──────────────────────────────────────────── */
let totalAnswered = 0,
    totalCorrect = 0,
    openCards = 0;
const TOTAL_PATTERNS = 27;

function updateStats() {
    document.getElementById('statAnswered').textContent = totalAnswered;
    document.getElementById('statCorrect').textContent = totalCorrect;
    document.getElementById('statOpen').textContent = openCards;
}

/* ─── SCORE RING ─────────────────────────────────────── */
function updateRing() {
    const total = Object.values(QUIZZES).reduce((s, a) => s + a.length, 0);
    const pct = total ? Math.round((totalCorrect / total) * 100) : 0;
    const ring = document.getElementById('scoreRing');
    const label = document.getElementById('scoreLabel');
    if (ring) {
        const c = 2 * Math.PI * 20;
        ring.style.strokeDashoffset = c - (c * pct) / 100;
    }
    if (label) label.textContent = pct + '%';
}

/* ─── TOAST ──────────────────────────────────────────── */
function showToast(msg, type = 'info') {
    const t = document.createElement('div');
    t.className = 'toast toast-' + type;
    t.textContent = msg;
    document.body.appendChild(t);
    requestAnimationFrame(() => t.classList.add('show'));
    setTimeout(() => {
        t.classList.remove('show');
        setTimeout(() => t.remove(), 400);
    }, 2000);
}

/* ─── SELECT OPTION ──────────────────────────────────── */
function selectOpt(el, correctIdx) {
    const opts = el.closest('.options').querySelectorAll('.opt');
    if ([...opts].some((o) => o.classList.contains('correct') || o.classList.contains('wrong')))
        return;
    const idx = parseInt(el.dataset.idx);
    opts.forEach((o) => o.classList.add('disabled'));
    el.classList.add(idx === correctIdx ? 'correct' : 'wrong');
    if (idx !== correctIdx) opts[correctIdx].classList.add('correct');
    el.closest('.question-item').classList.add('answered');
    totalAnswered++;
    if (idx === correctIdx) {
        totalCorrect++;
        showToast('✅ Correct!', 'success');
    } else showToast('❌ Wrong — check the answer below', 'error');
    updateStats();
    updateRing();
}

/* ─── TOGGLE QUESTION ────────────────────────────────── */
function toggleQuestion(el) {
    el.closest('.question-item').classList.toggle('open');
}

/* ─── TOGGLE CARD ────────────────────────────────────── */
function toggleCard(el) {
    const card = el.closest('.card');
    const wasOpen = card.classList.contains('open');
    card.classList.toggle('open');
    openCards += wasOpen ? -1 : 1;
    updateStats();
    updateProgress();
}

/* ─── PROGRESS BAR ───────────────────────────────────── */
function updateProgress() {
    document.getElementById('progressBar').style.width = (openCards / TOTAL_PATTERNS) * 100 + '%';
}

/* ─── EXPAND / COLLAPSE ALL ──────────────────────────── */
function expandAll() {
    document.querySelectorAll('.card:not([style*="display: none"])').forEach((card) => {
        if (!card.classList.contains('open')) {
            card.classList.add('open');
            openCards++;
        }
    });
    updateStats();
    updateProgress();
}
function collapseAll() {
    document.querySelectorAll('.card').forEach((c) => c.classList.remove('open'));
    openCards = 0;
    updateStats();
    updateProgress();
}

/* ─── SEARCH ─────────────────────────────────────────── */
document.getElementById('searchInput').addEventListener('input', function () {
    const q = this.value.toLowerCase().trim();
    document.querySelectorAll('.card').forEach((card) => {
        card.style.display = !q || card.dataset.name.includes(q) ? '' : 'none';
    });
    ['cr', 'st', 'bh', 'js'].forEach((cat) => {
        const h = document.querySelector(`[data-cat-header="${cat}"]`);
        if (!h) return;
        const any = [...document.querySelectorAll(`.card[data-cat="${cat}"]`)].some(
            (c) => c.style.display !== 'none'
        );
        h.style.display = any ? '' : 'none';
    });
});

/* ─── TABS ───────────────────────────────────────────── */
document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
        this.classList.add('active');
        const cat = this.dataset.cat;
        document.querySelectorAll('.card').forEach((c) => {
            c.style.display = cat === 'all' || c.dataset.cat === cat ? '' : 'none';
        });
        ['cr', 'st', 'bh', 'js'].forEach((c) => {
            const h = document.querySelector(`[data-cat-header="${c}"]`);
            if (h) h.style.display = cat === 'all' || cat === c ? '' : 'none';
        });
        document.getElementById('searchInput').value = '';
    });
});

/* ─── KEYBOARD SHORTCUT ──────────────────────────────── */
document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
    if (e.key === 'Escape') document.getElementById('searchInput').blur();
});

/* ─── Footer ──────────────────────────────── */
document.getElementById('dp-year').innerHTML =
    '&copy; ' + new Date().getFullYear() + ' &nbsp;·&nbsp; All Rights Reserved';

/* ─── INIT ───────────────────────────────────────────── */
updateStats();
updateRing();
