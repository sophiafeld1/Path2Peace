export interface Modality {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  pageTitle: string;
  fullContent: string[];
  sections?: { heading: string; content: string }[];
}

export const modalities: Modality[] = [
  {
    slug: "internal-family-systems",
    name: "Internal Family Systems (IFS)",
    shortName: "IFS",
    pageTitle: "What is IFS (Internal Family Systems)?",
    description:
      "A therapeutic approach that sees the mind as made up of different parts, like a family, each representing various aspects of ourselves.",
    fullContent: [
      "IFS is a therapeutic approach that sees the mind as made up of different parts, like a family. These parts are different aspects of ourselves, such as our inner critic, the part of us that feels sad, or the part that is protective. IFS helps us understand these parts and how they interact, aiming to heal the wounded parts and bring the system into balance. The goal is to be more connected with our true, calm self, so we can better cope with life\u2019s challenges.",
      "According to Dr. Richard Schwartz, the founder of IFS, there are three main types of components:",
    ],
    sections: [
      {
        heading: "Managers",
        content:
          "Parts that try to keep the person in control of situations and avoid emotional pain. They often manifest as perfectionism, anxiety, or hyper-vigilance.",
      },
      {
        heading: "Exiles",
        content:
          "Parts that carry wounds from past traumas or painful experiences. They are often buried deep because they hold intense emotions like shame, fear, or sadness.",
      },
      {
        heading: "Firefighters",
        content:
          "Parts that react when exiles are triggered, working to soothe or numb the pain, often through impulsive or addictive behaviors.",
      },
      {
        heading: "The Self",
        content:
          "The core, compassionate, and centered part of a person. It is believed that the Self can lead the internal system once the person is able to connect with it. The goal of IFS therapy is to have the Self lead, allowing the parts to heal and harmonize.",
      },
      {
        heading: "The IFS Process",
        content:
          "In IFS, the goal is not to eliminate parts but to listen to and understand them. By doing so, parts can let go of their extreme roles and feel safe, and the person can function with more balance and harmony. Overall, IFS helps people resolve inner conflicts, heal past traumas, and achieve a greater sense of self-awareness and emotional well-being by working with and understanding these internal parts.",
      },
    ],
  },
  {
    slug: "emdr",
    name: "EMDR Therapy (Eye Movement Desensitization and Reprocessing)",
    shortName: "EMDR",
    pageTitle: "What is EMDR Therapy?",
    description:
      "A therapeutic approach designed to help clients process and heal from traumatic experiences and distressing memories.",
    fullContent: [
      "Our brains have natural ways to recover from traumatic memories and events. This process involves communication between the amygdala (which provides the alarm signal for stressful events), the hippocampus (which assists with learning, including memories about safety and danger), and the prefrontal cortex (which analyzes and controls behavior and emotion). Often, these mechanisms allow us to recover and process traumatic events in a way that no longer leaves us anxious, stressed, or reactivated.",
      "EMDR, or Eye Movement Desensitization and Reprocessing, is a therapeutic approach designed to help our clients process and heal from traumatic experiences and distressing memories. It was developed in the late 1980s and is often used to treat conditions like post-traumatic stress disorder (PTSD). EMDR therapy has been extensively researched and has demonstrated notable effectiveness for treating and resolving all types of trauma.",
      "During an EMDR session, a therapist guides the individual through a series of bilateral eye movements or other forms of rhythmic stimulation (like taps or sounds) while they recall a troubling memory. The idea is that this process helps the brain reprocess the memory, reducing its emotional charge and making it easier to cope with.",
      "EMDR involves eight phases: starting with preparing the client and gathering their history, moving through the desensitization and processing of specific memories, and finally integrating the new insights gained during therapy into the person\u2019s life. Many people find EMDR to be an effective and relatively quick way to address deep-seated emotional issues.",
    ],
  },
  {
    slug: "ego-state-therapy",
    name: "Ego State Therapy",
    shortName: "Ego State",
    pageTitle: "What is Ego State Therapy?",
    description:
      "Views the personality as made up of distinct ego states, each representing different thoughts, emotions, and behaviors.",
    fullContent: [
      'Ego state therapy is a therapeutic approach that views the personality as made up of distinct \u201Cego states,\u201D or emotional \u201Cparts,\u201D each representing different thoughts, emotions, and behaviors. These states can become conflicted or dissociated, especially after trauma. The therapy works to identify, understand, and heal these states by improving internal communication and resolving conflicts, leading to greater emotional well-being and integration.',
      "Ego state therapy is often used for the treatment of dissociation, complex PTSD and attachment disruptions in childhood. It was originally developed by John G. Watkins and Helen Watkins, psychotherapists who specialized in hypnosis, dissociation, and multiple personalities.",
    ],
  },
  {
    slug: "aedp",
    name: "AEDP (Accelerated Experiential Dynamic Psychotherapy)",
    shortName: "AEDP",
    pageTitle: "What is AEDP?",
    description:
      "A type of therapy that focuses on emotional experiences and the relationship between the therapist and the client.",
    fullContent: [
      "AEDP, or Accelerated Experiential Dynamic Psychotherapy, is a type of therapy that focuses on emotional experiences and the relationship between the therapist and the client. It aims to help individuals process and transform their emotional pain and trauma in a safe environment.",
    ],
    sections: [
      {
        heading: "Key Elements of AEDP",
        content:
          "It emphasizes experiencing emotions in the moment, rather than just talking about them. The therapy unfolds in a dynamic way, with the therapist and client actively engaging in the therapeutic process. AEDP recognizes the importance of the therapeutic relationship, using it as a tool for healing and fostering secure attachment. The goal is not only to relieve unpleasant symptoms but also to promote deep emotional transformation and healing.",
      },
      {
        heading: "Outcomes",
        content:
          "Overall, AEDP helps clients access and integrate their emotions, leading to greater self-awareness, resilience and a more fulfilling life.",
      },
    ],
  },
];
