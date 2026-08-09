import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@qhaluma/principal",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "@qhaluma/principal"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
